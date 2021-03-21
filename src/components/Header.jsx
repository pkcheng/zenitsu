import React from "react";
import logo from "../img/logo.png";

const Header = () => {
  return (
    <div className="header">
      <a href=".">
        <img id="logo" src={logo} alt={logo} />
      </a>
    </div>
  );
};

export default Header;
