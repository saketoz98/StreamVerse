import React from 'react'
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";
import classNames from 'classnames';

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const mainContainerClasses = classNames('w-full', {
    'lg:col-span-12': !isMenuOpen,
    'lg:col-span-10': isMenuOpen,
  });

  return (
	<div className={mainContainerClasses}>
    <ButtonList/>
    <VideoContainer/>
  </div>
  )
}

export default MainContainer