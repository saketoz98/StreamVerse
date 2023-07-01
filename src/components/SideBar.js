/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import store from "../utils/store";
import SideBarItem from "./SideBarItem";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const sideBarItemNames = ["Home", "Shorts", "Subscriptions", "Library"]

  return !isMenuOpen? null : (
    <div className="col-span-2 px-4 py-2 shadow-lg">
      {sideBarItemNames.map((item) => (<SideBarItem sideBarItemName={item} />))}
    </div>
  );
};

export default SideBar;
