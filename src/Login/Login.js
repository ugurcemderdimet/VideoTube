import React from "react";

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  return (
  <section className="login">
      <div className="loginContainer">
          <label>Username</label>
          <input type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)} />
          <p className="errorMsg">{emailError}</p>
      </div>
  </section>
  )
};

export default Login;
