import React, { useEffect, useState } from 'react';
import VideoCards from './VideoCards';
import {YOUTUBE_VIDEO_API} from '../utils/constant'

const VideoContainer = () => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    getVideos();
  },[]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    // console.log(json.items);
    setVideos(json.items)
  };
  return (
    <div><VideoCards info= {videos[0]}/></div>
  )
}

export default VideoContainer;