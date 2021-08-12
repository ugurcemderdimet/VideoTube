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
      <div className="form-signin text-center">
        <i className="bi bi-camera-video mb-4 fs-1"></i>
        <h1 className="h3 mb-3 fw-normal">Video Tube</h1>
        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            autoFocus
            required
            value={email}
            placeholder="admin@hotmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label for="floatingInput">Email address</label>
          <p className="errorMsg">{emailError}</p>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            required
            value={password}
            placeholder="******"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label for="floatingPassword">Password</label>
          <p className="errorMsg">{passwordError}</p>
        </div>

        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button
                className="w-100 btn btn-lg btn-primary"
                onClick={handleLogin}
              >
                LOG IN
              </button>
              <p className="mt-3 mb-3 text-muted">
                Don't you have an account?
                <span
                  className="text-primary"
                  onClick={() => setHasAccount(!hasAccount)}
                >
                  SIGN UP
                </span>
              </p>
            </>
          ) : (
            <>
              <button
                className="w-100 btn btn-lg btn-primary"
                onClick={handleSignup}
              >
                SIGN UP
              </button>
              <p className="mt-3 mb-3 text-muted">
                You already have an account?{" "}
                <span
                  className="text-primary"
                  onClick={() => setHasAccount(!hasAccount)}
                >
                  LOG IN
                </span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
