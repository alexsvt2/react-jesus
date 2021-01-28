import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./Header";
import Posts from "./Posts";
import About from "./About";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="App">
        <Router>
          <Header title="Posts" username="Alexis" />
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Posts />
          </Route>
        </Router>
      </div>
    </>
  );
};

export default App;
