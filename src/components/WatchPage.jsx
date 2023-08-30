import React, { useEffect } from "react";
import { closeMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer"

const WatchPage = () => {
  const [searchParams] = useSearchParams();
//   console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  });
  return (
    <>
    <div className="flex flex-col">
    <div className="p-15 ml-[110px]">
      <iframe
        width="1257"
        height="707"
        src={"https://www.youtube.com/embed/"+searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        ></iframe>
    </div>
     <CommentsContainer/>
    </div>
    </>
  );
};

export default WatchPage;
