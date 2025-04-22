import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useUIContext } from "../context/UIContext";

const menuItems = [
  { name: "Friends", path: "/connections/friends" },
  { name: "Followers", path: "/connections/followers" },
  { name: "Requests", path: "/connections/requests" },
];

const ConnectionsMenu = () => {
  const { searchBarOpen } = useUIContext();
  const Navigate = useNavigate();
  const Location = useLocation();
  return (
    <div className={`connections-menu ${searchBarOpen ? "blur" : ""}`}>
      {menuItems.map((item, index) => (
        <div
          key={index}
          className={`menu-item ${
            Location.pathname.startsWith(item.path) ? "active" : ""
          }`}
          onClick={() => {
            Navigate(item.path);
          }}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default ConnectionsMenu;
