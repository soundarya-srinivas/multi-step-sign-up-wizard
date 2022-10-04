import React from "react";
import { Link } from "react-router-dom";
import "../componentsStyle.css";

const NavBar = () => {
  const HandleOnclick = () => {};

  return (
    <>
      <ul className="uList">
        <li onClick={HandleOnclick} className="activeLink contentBackground">
          <Link to="/">1</Link>
        </li>
        <li onClick={HandleOnclick} className="contentBackground">
          <Link to="/Page2">2</Link>
        </li>
        <li onClick={HandleOnclick} className="contentBackground">
          <Link to="/Page3">3</Link>
        </li>
        <li onClick={HandleOnclick} className="contentBackground">
          <Link to="/Page4">4</Link>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
