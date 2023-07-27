import React from "react";
import { convertViewCount } from "../utils/utils";

const VideoDetails = ({currVideoDetails}) => {
  if (!currVideoDetails) {
    return <div>Loading...</div>;
  }
  const  {title, description, channelTitle}  = currVideoDetails.items[0].snippet;
  const  {likeCount, viewCount}  = currVideoDetails.items[0].statistics;

  return (
    <div>
      <div className="font-bold text-xl">{title}</div>
      <div className="flex justify-between">
        <div className="flex my-3 items-center">
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq8uQ5-1MzoSskLhm-xGab5TECH0f27m2uqyEEkq4vHsYCJi1vBLapngkUuM0m392V3U4&usqp=CAU"
                alt="profile"
                className="w-8 h-8 rounded-full"
            />
            <div className="flex flex-col">
                <div className="text-md font-bold px-3">{channelTitle}</div>
                <div className="text-xs font-light px-3">200K</div>
            </div>
            <button className="ml-5 p-3 rounded-3xl text-sm font-bold bg-black text-white" >Subscribe</button>
            
        </div>
        <div className="w-2/12 flex my-3 items-center justify-between">
            <div className="flex items-center ">
                <img src="like.png" className="w-6 h-6 mx-2" /> 
                <div>{convertViewCount(likeCount)}</div>
            </div>
            <div className="flex items-center mr-1 ">
                <img src="view.png" className="w-6 h-6 mx-2" /> 
                <div>{convertViewCount(viewCount)}</div>
            </div>
        </div>
      </div>
      
      {/* <p>{description}</p> */}

    </div>
  );
};

export default VideoDetails;
