import React from "react";
import CloseButton from "../Portals";
import ListComponent from "../VideoList/ListComponent";

const VideoListPopup = ({ title, modal, setModalContent, style, ...props }) => {
  const handleClick = () => {
    setModalContent(
      <>
        <CloseButton modal={modal} />
        <ListComponent modal={modal} {...props} />
      </>,
      ""
    );
  };
  return (
    <button
      className="btn btn-danger position-absolute"
      style={style}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default VideoListPopup;
