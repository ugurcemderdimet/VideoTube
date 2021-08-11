import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

function Download() {
  console.log(window.location.href);

  let [search, setSearch] = useState("");

  useEffect(() => {
    let query = window.location.href.split("?qr=");
    if (query[1]) {
      setSearch(query[1]);
    }
  }, []);

  return (
    <>
      <div className="application">
        <Helmet>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        </Helmet>
        ...
      </div>
      <div class="container">
        <div class="jumbotron">
          <h1 class="text-center pt-4">
            It's easy to download videos with VideoTube!!
          </h1>
        </div>

        <div className="text-center">
          <iframe
            id="iccerceve"
            frameborder="0"
            src={`https://yt1s.com/tr1${
              search === ""
                ? ""
                : `?q=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D${search}`
            } `}
            scrolling="no"
            style={{
              width: "550px",
              height: "900px",
              overflow: "hidden",
              zIndex: "-1",
              marginBottom: "50px",
            }}
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Download;
