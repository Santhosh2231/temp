import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div>
        <h1>Enter search keyword to load...</h1>
        <br></br>
        <p className="font-Inria">
          Use the API to search for videos matching specific search terms,
          topics, locations, publication dates, and much more. The APIs
          search.list method also supports searches for playlists and channels.
          With the YouTube Data API, you can add a variety of YouTube features
          to your application. Use the API to upload videos, manage playlists
          and subscriptions, update channel settings, and more.
        </p>
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(typeof video);
  return (
    <div className="text-center items-center">
    
     <div className="flex justify-center items-center">
        <div className="justify-items-center">
            <iframe src={videoSrc} allowFullScreen title="Video player" />
        </div>
    </div>
      <div className="my-4">
        <h6 className="font-Inria text-xl">{video.snippet.title}</h6>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
