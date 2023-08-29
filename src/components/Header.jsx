import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState ([]);
  const [showSuggestions, setShowSuggestions] =useState(false)
  useEffect(() => {
    //Api call
    const timer = setTimeout(() => getSearchSuggestions(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  //**key-i */

  const getSearchSuggestions = async () => {
    console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
    setSuggestions(json[1])
  };

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-md ">
      <div className="flex col-span-1">
        <img
          onClick={toggleMenuHandler}
          className="w-[24px] h-[24px] cursor-pointer"
          alt="ham-menu"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
        />
        <a href="/">
          <img
            className="w-[90px] h-[30px] mx-2"
            alt="Youtube-logo"
            src="data:image/png;base64,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"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <input
          className="p-2 w-1/2 border border-gray-400 rounded-l-full "
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus ={()=> setShowSuggestions(true)}
          onBlur ={()=> setShowSuggestions(false)}
        />
        <button className="border border-gray-300 p-2 rounded-r-full bg-gray-200">
          🔍
          {/* <img className="w-[20px] h-[20px] mt-[2px]" src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png" alt="search-icon" /> */}
        </button>
      {showSuggestions && (<div className=" absolute bg-white py-2 px-5 w-[37rem] rounded-md shadow-lg">
        <ul >
          {suggestions.map((suggestion) => 
          (<li key={suggestion} className="hover:bg-gray-300"> 🔎{suggestion}</li>)
          )}

        </ul>

      </div>)}
      </div>
      <div>
        <img
          className="h-8"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Header;
