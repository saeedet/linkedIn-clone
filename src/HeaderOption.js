import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./HeaderOption.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function HeaderOption({ title, Icon, onClick, active }) {
  const [display, setDisplay] = useState(false);

  const user = useSelector(selectUser);

  let classes = "headerOption ";
  if (active) {
    classes += "active";
  }

  const optionHandler = () => {
    if (onClick) {
      setDisplay(!display);
    }
  };

  return (
    <div className={classes} onClick={optionHandler}>
      {Icon ? (
        <Icon className="headerOption__icon" />
      ) : (
        <Avatar className="headerOption__icon" src={user?.photoUrl}>
          {user?.displayName && user?.displayName[0]}
        </Avatar>
      )}
      <div className="headerOption__profile">
        <h3 className="headerOption__title">{title}</h3>
        {!Icon && <ArrowDropDownIcon className="headerOption__arrow" />}
        {onClick && (
          <div
            className="header__rightSignout"
            style={{ display: display ? "flex" : "none" }}
          >
            <p onClick={onClick}>Sign Out</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default HeaderOption;
