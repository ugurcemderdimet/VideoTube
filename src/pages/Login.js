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
        <label>Kullanıcı Mail Adresi</label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          placeholder="admin@hotmail.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="errorMsg">{emailError}</p>
        <label>Şifre</label>
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
              <button onClick={handleLogin}>GİRİŞ YAP</button>
              <p>
                Bir hesabın yok mu?
                <span onClick={() => setHasAccount(!hasAccount)}>KAYIT OL</span>
              </p>
            </>
          ) : (
            <>
              <button onClick={handleSignup}>KAYIT OL</button>
              <p>
                Zaten bir hesabın var mı?{" "}
                <span onClick={() => setHasAccount(!hasAccount)}>GİRİŞ YAP</span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
