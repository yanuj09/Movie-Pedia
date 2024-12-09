import React from "react";

const VideoTitle = (props) => {
  const { title, overview } = props;

  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl  font-bold">{title}</h1>
      <p className="text-lg py-6 w-1/4">{overview}</p>
      <div>
        <button className="bg-white p-4 px-12 text-black text-xl rounded-lg hover:bg-opacity-60 ">
          ▶ Play
        </button>

        <button className="bg-gray-700 p-4 px-12 mx-2 text-white text-xl rounded-lg opacity-[0.9] ">
          ⓘ moreinfo
        </button> 
      </div>
    </div>
  );
};

export default VideoTitle;
