import React from "react";
import "./VideoStats.css";

function VideoStats(props) {
  return (
    <div className="stats">
      <i className="far fa-clock fa-xs"></i>
      {Math.floor(props.duration / 60)}:{props.duration % 60}
      <i className="far fa-eye fa-xs"></i>
      {props.views}
    </div>
  );
}

export default VideoStats;
