import React, { useEffect, useState } from "react";
import VideoCards from "./VideoCards";
import { YOUTUBE_VIDEO_API } from "../utils/constant";
import { Link } from "react-router-dom";
import MainPageShimmer from "./MainPageShimmer";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    // console.log(json.items);
    setVideos(json.items);
  };
  return (
    <>
      <div className="flex flex-wrap">
        {videos.length === 0 ? (
          <MainPageShimmer />
        ) : 
          <div className="flex flex-wrap">
            {videos.map((video) => (
              <Link to={"/watch?v=" + video.id}>
                <VideoCards key={video.id} cards={video} />
              </Link>
            ))}
          </div>
        }
      </div>
    </>
  );
};

export default VideoContainer;

// git remote add origin https://github.com/gauravjagwani/Youtube-clone-reactjs.git
