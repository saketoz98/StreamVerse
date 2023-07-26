import React from 'react'
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";
import classNames from 'classnames';

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
	<div className="px-3 col-span-11">
    <ButtonList/>
    <VideoContainer/>
  </div>
  )
}

export default MainContainer