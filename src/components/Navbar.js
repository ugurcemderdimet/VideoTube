import React from "react";
import { Link } from "react-router-dom";
import logo from "..";
import Logout from "../pages/Logout";
import { useGlobalContext } from '../context'

export default function Navbar({handleLogout}) {
  const { user, setUser, hasAccount, setHasAccount } = useGlobalContext()
  console.log(user);
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img src="/logo_yatay.png" className="logo" />
        </Link>
        {
          user && (
            <ul className="nav-links">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
              <Logout handleLogout={handleLogout} />
              </li>
              
            </ul>
          )
        }
      </div>
    </nav>
  );
}
