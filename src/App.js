import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import fire  from "./fire";
import First from "./Login/First";
import Download from "./pages/Download";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/first">
          <First />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/download">
          <Download />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
