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
        <label>User Mail Adress</label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          placeholder="admin@hotmail.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="errorMsg">{emailError}</p>
        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          placeholder="******"
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="errorMsg">{passwordError}</p>
        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button onClick={handleLogin}>LOG IN</button>
              <p>
                Don't you have an account?
                <span onClick={() => setHasAccount(!hasAccount)}>SIGN UP</span>
              </p>
            </>
          ) : (
            <>
              <button onClick={handleSignup}>SIGN UP</button>
              <p>
                You already have an account?{" "}
                <span onClick={() => setHasAccount(!hasAccount)}>LOG IN</span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
