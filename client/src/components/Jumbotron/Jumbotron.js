import React from "react";
import "./Jumbotron.css";

const Jumbotron = ({ children }) => (
  <header className="header">
   {children}
  </header>
);

export default Jumbotron;
