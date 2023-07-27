import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import LiveChat from "./LiveChat";
import classNames from "classnames";
import VideoDetails from "./VideoDetails";
import {
  GOOGLE_API_KEY,
  YOUTUBE_RECOMENDED_VIDEO_LIST_API,
  YOUTUBE_VIDEO_WATCH_API,
} from "../constant";
import { setVideoDetails } from "../utils/videoSlice";
import CommentsContainer from "./CommentsContainer";
import { Link } from "react-router-dom";

const WatchPage = () => {
  const [currVideo, setCurrVideo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const videoDetails = useSelector((store) => store.video.videoDetails);

  const [searchParams] = useSearchParams();
  let videoId = searchParams.get("v");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  useEffect(() => {
    let videoId = searchParams.get("v");
    let currVideoDetails = null;
    console.log("video details ", videoDetails);
    if (!videoDetails[videoId]) {
      const getVideoDetails = async () => {
        try {
          const [currVideo, relatedVideos] =
            (await fetchVideoDetails(videoId)) || [];
          console.log("curr video details ", currVideo);
          console.log("related videos ", relatedVideos);
          setCurrVideo(currVideo);
          dispatch(setVideoDetails(currVideo));
          setRelatedVideos(relatedVideos?.items);
        } catch (error) {
          console.error("Error fetching video details:", error);
        }
      };
      getVideoDetails();
    } else {
      currVideoDetails = videoDetails[videoId];
      setCurrVideo(currVideoDetails);
    }
  }, [searchParams]);

  const fetchVideoDetails = async (videoId) => {
    console.log("fetching video details");
    const response = await Promise.all([
      fetch(YOUTUBE_VIDEO_WATCH_API + videoId),
      fetch(YOUTUBE_RECOMENDED_VIDEO_LIST_API + videoId),
    ]);
    const currVideo = await response[0].json();
    const relatedVideos = await response[1].json();
    return [currVideo, relatedVideos];
  };

  const watchPageContainerStyle = classNames("w-full grid", {
    "col-span-12 grid-cols-12": !isMenuOpen,
    "col-span-10 grid-cols-10": isMenuOpen,
  });

  const videoIframeContainerStyle = classNames("px-2 m-4 flex justify-center", {
    "col-span-7": !isMenuOpen,
    "col-span-6": isMenuOpen,
  });

  const liveChatContainerStyle = classNames("w-full", {
    "col-span-5": !isMenuOpen,
    "col-span-4": isMenuOpen,
  });

  const videoDetailsContainerStyle = classNames("px-2 mx-4 my-1 flex-col", {
    "col-span-7": !isMenuOpen,
    "col-span-6": isMenuOpen,
  });

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
        <LiveChat />
      </div>
      <div className={videoDetailsContainerStyle}>
        <VideoDetails currVideoDetails={currVideo} />
      </div>
      <div className={videoDetailsContainerStyle}>
        <CommentsContainer />
      </div>
      <div className={liveChatContainerStyle}>
        <div className="flex flex-col">
          {relatedVideos?.map((video) => (
            <Link
              key={video?.id?.videoId}
              to={"/watch?v=" + video?.id?.videoId}
            >
              <div className="px-3 m-2 flex">
                <img
                  className="rounded-xl w-[168px] h-[94px] "
                  alt="thumbnail"
                  src={video?.snippet?.thumbnails?.medium?.url}
                />
                <ul className="flex flex-col justify-start ml-2 w-60">
                  <li className="font-medium py-2 text-[14px] line-clamp-2 max-h-[50px] leading-5">
                    {video?.snippet?.title}
                  </li>
                  <li className="text-gray-500 text-[12px]">
                    {video?.snippet?.channelTitle}
                  </li>
                  <li className="text-gray-500 text-[12px]">
                    100 views{" "}
                    {(
                      Math.abs(
                        new Date(video?.snippet?.publishedAt) - new Date()
                      ) /
                      (60 * 60 * 24 * 1000)
                    ).toFixed(1)}{" "}
                    days ago
                  </li>
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
