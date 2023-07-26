import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../constant";
import VideoCard from "./VideoCard";
import { useSelector, useDispatch } from "react-redux";
import { setVideoList } from "../utils/appSlice";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const videoList = useSelector((store) => store.app.videoList);

  const dispatch = useDispatch();

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEOS_API);
    const jsonData = await response.json();
    console.log(jsonData.items);
    setVideos(jsonData?.items);
    dispatch(setVideoList(jsonData?.items))
  };
  return (
    <div className="flex flex-wrap justify-start">
      {videoList.map((item) => (
        <VideoCard videoInfo={item} key={item?.id}/>
      ))}
    </div>
  );
};

export default VideoContainer;
