import React, { useState, useEffect } from "react";
import Player from "../Player";
import ListComponent from "./ListComponent";
import video from "./ListComponent";
import handleVideo, { index } from "./ListComponent";

const VideoPopup = ({ top, left, video, modal, setModalContent, ...props }) => {
  const componentStyle = {
    top: `${top}%`,
    left: `${left}%`,
  };

  return (
    <div
      className="position-absolute top-0 start-50 translate-middle-x mt-3"
      style={componentStyle}
    >
      <Player modal={modal} setModalContent={setModalContent} {...props} />
    </div>
  );
};

export default VideoPopup;
