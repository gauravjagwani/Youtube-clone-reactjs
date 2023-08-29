import React from "react";

const MainPageShimmer = () => {
  const mapped = Array.from({ length: 10 }).map((e) => {
    return (
      <div className="p-2 m-2 w-[288px] h-[297px] bg-gray-100">
        <div className="rounded-lg w-[268.37px] h-[150.95px] bg-gray-300">
          {" "}
        </div>

        <div className="  my-5  w-[268.37px] h-[15px] bg-gray-300"></div>
        <div className="  my-5 w-[268.37px] h-[15px] bg-gray-300"></div>
        <div className="  my-5 w-[268.37px] h-[15px] bg-gray-300"></div>
      </div>
    );
  });
  return <div>
  {mapped}
  </div>;
};

export default MainPageShimmer;
