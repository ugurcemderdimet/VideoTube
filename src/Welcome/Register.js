import React, { useState } from "react";
// import "./Welcome.css";

const Register = (currentIndex) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  currentIndex = 1;

  function handleSubmit(event) {
    event.preventDefault();
  }

  const handleSignin = () => {
    currentIndex = 0;
  };

  const handleRegister = () => {
    currentIndex = 1;
  };

  return (
    <div id="arkaplan">
      <div class="wrapper fadeInDown">
        <div id="form-icerigi">
          <form className="position-absolute top-0 border w-25 p-3 start-50 translate-middle-x mt-3 row g-3">
            <input
              type="text"
              id="login"
              className="fadeIn second"
              name="login"
              placeholder="Mail Adresi"
            />
            <input
              type="password"
              id="password"
              className="fadeIn third"
              name="login"
              placeholder="Parola"
            />
            <input
              type="text"
              id="phone"
              className="fadeIn fourth"
              name="phone_number"
              placeholder="Telefon Numaranız"
            />
            <input
              type="submit"
              className=" fadeIn fifth"
              value="Log in"
              onClick={handleSignin()}
            />
            <br />
            <br />
            <input
              type="submit"
              id="register"
              className="fadeIn fifth"
              value="Sign up"
              onClick={handleRegister()}
            />
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
