import React, { useState } from "react";
import VideoPopup from "./VideoPopup";

const ListComponent = ({ videolist, modal }) => {
  let [currentIndex, setCurrentIndex] = useState(-1);

  const handleClose = () => {
    modal.hide();
    setCurrentIndex(-1);
  };
  const handleCurrent = (index) => {
    console.log("eski current:", currentVideo);
    setCurrentIndex(index);
    console.log("current id degistirildi:", index);
  };

  const currentVideo = currentIndex === -1 ? null : videolist[currentIndex];
  return (
    <>
      {currentIndex === -1 ? (
        <>
          <div className="position-absolute top-0 start-50 translate-middle-x mt-3">
            <div className="card border-dark mb-3 ">
              <div className="row g-0 row row-cols-1 row-cols-md-4 g-4 justify-content-center">
                {videolist.map((video, index) => (
                  <>
                    <div className="col-md-4">
                      <img src={video.thumbnail} />
                    </div>
                    <div className="col-md-8 ">
                      <div className="card-body ">
                        <h5 className="card-title">{video.title}</h5>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => handleCurrent(index)}
                        >
                          Watch the video
                        </button>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-danger position-absolute top-0 end-0 mt-3 me-3"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={() => handleClose()}
          >
            Close
          </button>
        </>
      ) : (
        <>
          <VideoPopup {...currentVideo} />
          <button
            type="button"
            className="btn btn-danger position-absolute top-0 end-0 mt-3 me-3"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={() => setCurrentIndex(-1)}
          >
            Back
          </button>
        </>
      )}
    </>
  );
};

export default ListComponent;
