import React from "react";
// import VideoItem from "./VideoItem";

const VideoList = ({ videos, handleVideoSelect }) => {

  
  return <div className="">{
    <div className="my-10 flex gap-5 justify-between flex-wrap group">
        
            {videos.map((video, i) => (
            
                <div
                key={i}
                onClick={()=>handleVideoSelect(video)}
                className="min-w-full md:min-w-[14rem]  duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1
                " 
                >

                <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} className="mx-auto h-30 w-80 " />
                <p className="font-Merriweather overflow-hidden">{video.snippet.title}</p>
               
                </div>
            
            ))}
            
        </div> 
  }</div>;
};
export default VideoList;


