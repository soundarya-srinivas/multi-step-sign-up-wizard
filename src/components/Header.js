import React from 'react';
import "../componentsStyle.css";

const Header = () => {
  // consists simple logo and header
  return (
    <div className="label">
              <img
                alt="edenlogo"
                className="logo"
                src="./resources/Edenlogo.png"
              ></img>
              <h2>Eden</h2>
            </div>
  )
}

export default Header