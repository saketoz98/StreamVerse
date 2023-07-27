import React from "react";

const StreamVerseLogo = () => {
  const gradientStyleStream = {
    background: "linear-gradient(to right, #8A2387, #E94057, #F27121)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <div className="flex items-center">
      <div className="text-3xl font-extrabold" style={gradientStyleStream}>
        StreamVerse
      </div>
    </div>
  );
};

export default StreamVerseLogo;
