import React from "react";

const Nav = props => (
  <nav className=" nav-fill w-100 navbar navbar-expand-lg navbar-light bg-dark">
    <ul className="navbar-nav navbar-collapse">
      <li className="col-sm-12 col-md-4 col-lg-3 nav-item">{props.alert}</li>
      <li className="col-sm-12 col-md-4 col-lg-3 nav-item">Score:{props.score}</li>
      <li className="col-sm-12 col-md-4 col-lg-3 nav-item"> Top Score:{props.topScore}</li>
    </ul>
  </nav>
);

export default Nav;
