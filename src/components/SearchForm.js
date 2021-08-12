import React from "react";
import { useGlobalContext } from "../context";
import _ from "lodash";

export default function SearchForm() {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchVideo = _.debounce((e) => {
    setSearchTerm(searchValue.current.value);
  }, 2000);

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <div class="container my-5">
        <div class="card">
          <h5 class="card-header">Search your video</h5>
          <div class="card-body">
            <form onSubmit={handleSubmit}>
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Search"
                aria-label=".form-control-lg example"
                ref={searchValue}
                onChange={searchVideo}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
