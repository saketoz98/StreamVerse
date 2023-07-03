import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import LiveChat from "./LiveChat";
import classNames from "classnames";
import VideoDetails from "./VideoDetails";
import { GOOGLE_API_KEY } from "../constant";
import { setVideoDetails } from "../utils/videoSlice";

const WatchPage = () => {
  const [currVideo, setCurrVideo] = useState(null);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen); 
  const videoDetails = useSelector((store) => store.video.videoDetails);

  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  useEffect(() => {
    let videoId = searchParams.get("v")
    let currVideoDetails = null;
    console.log("video details ", videoDetails);
    if (!videoDetails[videoId]) {
      const getVideoDetails = async () => {
        try {
          const currVideoDetails = await fetchVideoDetails(videoId);
          console.log("curr video details ", currVideoDetails);
          setCurrVideo(currVideoDetails);
          dispatch(setVideoDetails(currVideoDetails));
        } catch (error) {
          console.error("Error fetching video details:", error);
        }
      };
      getVideoDetails()
    }else{
      currVideoDetails = videoDetails[videoId];
      setCurrVideo(currVideoDetails);
    }
  }, [searchParams]);

  const watchPageContainerStyle = classNames('w-full grid', {
    'col-span-12 grid-cols-12': !isMenuOpen,
    'col-span-10 grid-cols-10': isMenuOpen,
  });

  const videoIframeContainerStyle = classNames('px-2 m-4 flex justify-center', {
    'col-span-7': !isMenuOpen,
    'col-span-6': isMenuOpen,
  });

  const liveChatContainerStyle = classNames('w-full', {
    'col-span-5': !isMenuOpen,
    'col-span-4': isMenuOpen,
  });

  const videoDetailsContainerStyle = classNames('px-2 mx-4 my-1 flex-col', {
    'col-span-7': !isMenuOpen,
    'col-span-6': isMenuOpen,
  });



  const fetchVideoDetails = async (videoId) => {
    console.log("fetching video details");
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${GOOGLE_API_KEY}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  }


  return (
    <div className={watchPageContainerStyle}>
      <div className={videoIframeContainerStyle}>
        <iframe
          className="w-screen sm:h-[200px] md:h-[400px] lg:h-[650px]"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className={liveChatContainerStyle}>
        <LiveChat/>
      </div>
      <div className={videoDetailsContainerStyle}>
        <VideoDetails currVideoDetails={currVideo}/>

      </div>
    </div>
  );
};

export default WatchPage;
