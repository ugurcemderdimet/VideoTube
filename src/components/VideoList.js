import React from "react";
import Loading from "./Loading";
import { useGlobalContext } from "../context";
import ReactPlayer from "react-player";

export default function VideoList() {
  const { videos, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (videos && videos.length < 1) {
    return (
      <h2 className="section-title">no videos matched your search criteria</h2>
    );
  }
  return (
    <>
      <h2 className="section-title">Videos</h2>
      <div className="row my-5 g-3">
        {videos &&
          videos.map((item) => {
            return (
              <>
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${item.id.videoId}`}
                        width="100%"
                      />
                    </div>
                    <div className="card-footer text-center">
                      <a
                        className="text-decoration-none"
                        href={`/download?qr=${item.id.videoId}`}
                      >
                        <i className="bi bi-download me-1"></i>
                        Download Video
                      </a>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
}
