import React from "react";
import "./PlaylistInfo.css";

function PlaylistInfo(props) {
  return (
    <div className="playlist">
      <span style={{ fontSize: 24, fontWeight: 700 }}>
        {props.numberOfVideos}
      </span>
      <span style={{ fontSize: 16 }}>WORKOUTS</span>
      <span
        class="iconify"
        data-icon="carbon:playlist"
        data-inline="false"
      ></span>
    </div>
  );
}

export default PlaylistInfo;
