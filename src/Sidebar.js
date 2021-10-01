import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./Sidebar.css";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://media-exp1.licdn.com/dms/image/C5616AQEKZYDBpUz4-A/profile-displaybackgroundimage-shrink_350_1400/0/1631407667786?e=1638403200&v=beta&t=gwcKN0AxJCzgws1Ti53R53rmS3r78vstMN2L9rdRTbc"
          alt=""
        />
        <Avatar className="sidebar__avatar" src={user?.photoUrl}>
          {user?.displayName && user.displayName[0]}
        </Avatar>
        <h2>{user?.displayName}</h2>
        <h4>{user?.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Connections</p>
          <p className="sidebar__statNumber">163</p>
        </div>
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,443</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("software")}
        {recentItem("web design")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
