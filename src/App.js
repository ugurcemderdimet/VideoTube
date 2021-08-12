import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import fire from "./fire";
import Welcome from "./pages/Welcome";
import Download from "./pages/Download";
import { useGlobalContext } from "./context";
import { Redirect } from "react-router";

function App() {
  const { user, setUser, hasAccount, setHasAccount } = useGlobalContext();
  const authListener = () => {
    if (user === "") {
      fire.auth().onAuthStateChanged((userr) => {
        if (userr) {
          setUser(userr);
        } else {
          setUser("");
        }
      });
    }
  };
  useEffect(() => {
    authListener();
  });
  const handleLogout = () => {
    fire.auth().signOut();
    window.location.href = "/";
  };
  return (
    <Router>
      <Navbar handleLogout={handleLogout} />
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        {user !== "" && (
          <>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/download">
              <Download />
            </Route>
          </>
        )}

        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
