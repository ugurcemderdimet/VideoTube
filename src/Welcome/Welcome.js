import React, { useState } from "react";
// import "./Welcome.css";
import Login from "./Login";
import Register from "./Register";

const Welcome = () => {
  let currentIndex = 0;

  return <>{currentIndex == 0 ? <Login /> : <Register />}</>;
};
export default Welcome;
