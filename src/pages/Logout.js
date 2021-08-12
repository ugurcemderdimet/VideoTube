import React from "react";
import Navbar from "../components/Navbar";

const Logout = ({ handleLogout }) => {
  return (
    <button
      type="button"
      className="btn btn-danger btn-sm"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default Logout;
