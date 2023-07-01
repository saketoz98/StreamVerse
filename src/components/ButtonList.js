import React from "react";
import Button from "./Button";
import classNames from "classnames";
import { useSelector } from "react-redux";

const ButtonList = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const buttonList = ["All", "Live", "Cricket", "World", "Sitcom", "Movies"]
  const buttonListContainer = classNames('w-full flex px-3 ms-16 my-2 ', {
    'ms-16': !isMenuOpen,
    'ms-8 px-5': isMenuOpen,
  });
  return (
    <div className={buttonListContainer}>
      {buttonList.map((item) => (<Button name={item} />))}
    </div>
  );
};

export default ButtonList;
