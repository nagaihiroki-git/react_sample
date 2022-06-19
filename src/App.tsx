import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home } from "./components/Home";

function App() {
  return (
    <Router>
      <h1>Hello React Router</h1>
      <Route path="/">
        <Home />
      </Route>
    </Router>
  );
}
export default App;
