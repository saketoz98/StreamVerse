import React from "react";

const ChatMessage = ({name, message}) => {
  return (
    <div className="flex items-center bg-slate-100 shadow-md my-1 p-2">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq8uQ5-1MzoSskLhm-xGab5TECH0f27m2uqyEEkq4vHsYCJi1vBLapngkUuM0m392V3U4&usqp=CAU"
        alt="profile"
        className="w-8 h-8 rounded-full"
      />
      <div className="flex flex-col">
        <div className="px-2 font-bold">{name}</div>
        <div className="px-2 text-sm">{message}</div>
      </div>
    </div>
  );
};

export default ChatMessage;
