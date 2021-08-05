import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon style={{ fontSize: "small" }} />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon style={{ color: "gray" }} />
      </div>
      {newsArticle("React is Amazing", "2h ago - 9099 readers")}
      {newsArticle(
        "Do we overshare on video calls?",
        "Top news - 9099 readers"
      )}
      {newsArticle(
        "Victoria to enter a snap lockdown",
        "1d ago - 9099 readers"
      )}
      {newsArticle(
        "Crown boss exits in scandal fallout",
        "2d ago - 9099 readers"
      )}
      {newsArticle("Where do Olympians work?", "4d ago - 9099 readers")}
      {newsArticle("Qantas stands down 2,500 staff", "15h ago - 9099 readers")}
    </div>
  );
}

export default Widgets;
