import React from "react";
import { Link } from "react-router-dom";

const SideBarItem = ({ sideBarItem }) => {
  const { sidebarName, sidebarLink } = sideBarItem
  return (
    <Link to={sidebarLink}>
      <div className="w-full hover:bg-slate-100 rounded-lg flex justify-center py-2 my-4">
        <div className="font-semibold">{sidebarName}</div>
      </div>
    </Link>
  );
};

export default SideBarItem;
