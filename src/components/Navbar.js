import React from "react";
import { Link } from "react-router-dom";
import logo from "..";
import Logout from "../pages/Logout";
import { useGlobalContext } from "../context";

export default function Navbar({ handleLogout }) {
  const { user, setUser, hasAccount, setHasAccount } = useGlobalContext();
  console.log(user);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <i className="bi bi-camera-video d-inline-block align-text-center me-1"></i>
            Video Tube
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            {user && (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    to="/home"
                    className="nav-link active"
                    ariaCurrent="page"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link " ariaCurrent="page">
                    About
                  </Link>
                </li>
              </ul>
            )}
            {user ? (
              <Logout handleLogout={handleLogout} />
            ) : (
              <button
                type="button"
                className="btn btn-secondary text-light btn-sm"
              >
                Login
              </button>
            )}
            <div></div>
          </div>
        </div>
      </nav>
    </>
  );
}
