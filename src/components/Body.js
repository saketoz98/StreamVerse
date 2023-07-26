import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <>
      <div className="grid grid-flow-col grid-cols-[225px_minmax(900px,_1fr)_100px]">
        <SideBar />
        <Outlet />
      </div>
    </>
  );
};

export default Body;
