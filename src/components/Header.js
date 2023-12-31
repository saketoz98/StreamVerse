import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchInput, toggleMenu, setVideoList } from "../utils/appSlice";
import SearchSuggest from "./SearchSuggest";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_VIDEO_WITH_QUERY_API } from "../constant";
import logo from '../assets/StreamVerse.png'; 
import StreamVerseLogo from "./StreamVerseLogo";


const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);

  const dispatch = useDispatch();

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  const handleSearchInput = (text) => {
    dispatch(setSearchInput(text));
  };

  const triggerSearch = async (e) => {
    setSearchQuery(e.target.innerText);
    setShowSuggestion(false);

    let searchedVideosList = await getSearchedVideosList(e.target.innerText);
    dispatch(setVideoList(searchedVideosList));

  };

  const getSearchedVideosList = async (searchQuery) => {
    const data = await fetch(YOUTUBE_SEARCH_VIDEO_WITH_QUERY_API + searchQuery);
    const searchedVideosJson = await data.json();
    return searchedVideosJson?.items;
  };

  return (
    <div className="sticky top-0 pb-2 z-50 bg-white">
      <div className="flex flex-row justify-between items-center px-4 py-3">
        <div className="flex flex-row items-center ">
          <div className="flex flex-row items-center">
            <img
              onClick={() => handleToggleMenu()}
              className=" h-6 mt-1 mx-4 cursor-pointer "
              alt="menu"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAV1BMVEX///90d3lxdHZtcHJqbW/AwcHk5eWVmJlnam1rbnCpq6yBhIb5+fnHyMng4eH29veKjI6ztLWipKV5fH6OkZLZ2tvq6+vLzMy5u7zIycnR0tLCw8OanJ7n5uYQAAACyUlEQVR4nO3di27iMBCFYcfOFodbEiBAgfd/ziXQSlvJNqkWCc3h/54gR3ac1p4xzgEAAAAAAAAAAAAAAAAoa4fVH2tWQzs13vK4qJtgT1MvjsspAfsYfGWTD7F/mG+/Da9+zv8StvtywKG2On7ffD2UAn7EVz/gE8SPfMCl7Rn6LeTXm5n1KXrnZ7mAa4U5Oopr7SHMD2KrMoTXQUz/eXPQWGdG4ZBMOFeZpNdpOk8m3Akl3CUTLoQSLt40YSeUsEsm3Agl3CQTnoW+Fudkwr3QFz/zT6LMUpNZaJw71a9+tCepT5mEKoOYHUKZNzH3Fo7OChFjeiH9crQfMR5LAZ37jLbfRR8/ywGv72JneEPR192D7dKbYReb4O0JTdwV90r/0Z76zcyaTX+afDQDAAAAAAAAAAAAYDL180P1M2D5c/yV+VqMVTmgfD2NfE2UROtasXlNvjbxIFNfmm6ZkRnC/CCKVJeOMhWm+rX6+v0W+j0zMgvNG3d26fcf6veQ6vcB6/dy6/fjv8GdCiqDmL8X4w3uNtH4J790P41zg/GttnGz7cGeqfw9UU7/ri93u68tmryvLU68r23UDquzNb+4cw8AAAAAAAAAAADAdKd5V726i+nXqm6evSD5p2UfGm/xnNv7JvQTDoFXwXKpQggP2p6cu1ivqImXcsCd5QG8C+nq2S8b+wGvEdOF+jcn61P0LubXVIsraIrPBTwqzNFRyDVZvvrBnigdcK3SnFdVdbpIWGaSZqfpRWWhuS416c8+nV2GvG1nl0gvwijTj9ALraXpYuihefWDPU2TqdcX+uKnA+o0IGbaD51rVQaxzta0i6w1mXXmRuKTWPhRMueWlf2IviruKLbG257GxqdHjSUX091r/tFm4mhYRJNb3uOmd1xM+0mr9Xzb1PY023mxt/Kn5f7Dmv3kvjUAAAAAAAAAAAAAUPUXCyx+ltjBidoAAAAASUVORK5CYII="
            />
            <Link to={"/"}>
              <StreamVerseLogo />
            </Link>
          </div>
        </div>
        <div className="relative text-lg">
          <div className="flex flex-row relative">
            <input
              onFocus={() => setShowSuggestion(true)}
              onBlur={() => setShowSuggestion(false)}
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                handleSearchInput(searchQuery);
              }}
              className=" border border-gray-400 p-1 px-8 rounded-l-full w-[500px]"
            />
            <button className=" border border-gray-400 p-1 px-4  rounded-r-full">
              🔍
            </button>
          </div>
          {showSuggestion && (
            <div className=" absolute">
              <SearchSuggest
                searchQuery={searchQuery}
                triggerSearch={triggerSearch}
              />
            </div>
          )}
        </div>
        <div>
          <img
            className=" h-8 mx-12"
            alt="user"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmEwalaRUsDXz_hi03tVaA56X2bP3ocnStKw&usqp=CAU"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
