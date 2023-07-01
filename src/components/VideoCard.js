import classNames from "classnames";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const VideoCard = ({ videoInfo }) => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // console.log(videoInfo);
  const { snippet, statistics } = videoInfo;
  const { channelTitle, title, thumbnails } = snippet;

  const videoCardStyle = classNames('m-2 p-3 overflow-hidden rounded-sm space-y-1 shadow-xl', {
    'w-60': !isMenuOpen,
    'w-72': isMenuOpen,
  });

  const convertViewCount = (viewCount)=>{
    if (viewCount >= 1000000) {
      return (viewCount / 1000000).toFixed(0) + "M";
    } else if (viewCount >= 1000) {
      return (viewCount / 1000).toFixed(0) + "K";
    } else {
      return viewCount.toString();
    }
  }

  return (
    <div className={videoCardStyle}>
      <Link to={"/watch?v=" + videoInfo.id}>
      <img
        className=" rounded-md"
        alt="thumbnails"
        src={thumbnails.medium.url}
      />
      </Link>

      <div className=" font-semibold pt-2 text-md">{title}</div>
      <div className="flex flex-col">
        <div className="text-sm">{channelTitle}</div>
        <div className="text-sm">{convertViewCount(statistics.viewCount)} Views</div>
      </div>
      
    </div>
  );
};

// const fitToViewPort = (VideoCard) => {
//   return (
//     <div className=" mx-5 ">
//       <VideoCard/>
//     </div>
//   )
// }

export default VideoCard;
