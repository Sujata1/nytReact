import React from "react";
import "./NavSub.css";
// const style = {
//   navSub: {
//   borderColor: 'rgb(202, 66, 158)',
//   backgroundColor: 'rgb(202, 66, 158)',
//   color: 'white'
// }
// };

const NavSub = props =>
  <nav className="navbar navbar-default navbar-top navSub">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="collapsed navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a className="navSub" href="/" className="navbar-brand">
        {props.subHeading}
        </a>
      </div>
      <div className="collapse navbar-collapse navbar-ex1-collapse">
        {props.optionDiv}
      </div>
    </div>
  </nav>;

export default NavSub;