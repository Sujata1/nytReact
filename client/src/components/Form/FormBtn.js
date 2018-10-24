import React from "react";
import "./FormBtn.css";

export const FormBtn = props => (
  <button {...props} style={{ float: "left", marginBottom: 10 }} className="btn submit-success">
    {props.children}
  </button>
);
