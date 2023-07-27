import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../constant";
import VideoCard from "./VideoCard";
import { useSelector, useDispatch } from "react-redux";
import { setVideoList } from "../utils/appSlice";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");

  const videoList = useSelector((store) => store.app.videoList);

  const dispatch = useDispatch();

  useEffect(() => {
    getVideos();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', infiniteScroll, true);
    return () => {
      window.removeEventListener('scroll', infiniteScroll, true);
    }
  }, [nextPageToken]);

  const getVideos = async () => {
    try {
      const url = nextPageToken !== "" ? `${YOUTUBE_VIDEOS_API}&pageToken=${nextPageToken}` : YOUTUBE_VIDEOS_API;
      const data = await fetch(url);
      const json = await data.json();
      setNextPageToken(json?.nextPageToken);
      setVideos([...videos, ...json?.items]);
      dispatch(setVideoList([...videos, ...json?.items]))
    } catch (e) {
      console.error(e);
    }
  }

  const infiniteScroll = () => {
    if (window.innerHeight + Math.round(document.documentElement.scrollTop) >= document.documentElement.offsetHeight - 300) {
      getVideos();
    }
  }

  if (!videoList.length) {
    return <Shimmer />;
  }

  return (
    <div className="flex flex-wrap justify-start">
      {videoList.map((item) => (
        <VideoCard videoInfo={item} key={item?.id}/>
      ))}
    </div>
  );
};

export default VideoContainer;
