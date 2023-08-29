import React from "react";

const VideoCards = ({cards}) => {
  // console.log(cards.snippet.thumbnails.medium.url);
  const { snippet, statistics } = cards;
  const {channelTitle, thumbnails, title} = snippet;
  // const {}
  // console.log(snippet)
  // console.log(statistics)
  

    
  return (
    <div className=" p-2 m-2 w-[288px] h-[297px] border border-2 border-black">    
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
      <ul>
        <li className="font-bold">{title}</li>
        <li className="text-gray-600">{channelTitle}</li>
        <li className="text-gray-600">{statistics.viewCount} views</li>
     </ul>
    </div>
  )
};

// const AdVideoCard = (VideoCard) => {
//   return 
//   <div>
//     <VideoCard></VideoCard>
//   </div>
// }

export default VideoCards; 