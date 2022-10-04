import React, { useContext } from "react";
import { formContext } from "../App";

const Page4 = () => {
  const { state } = useContext(formContext);
  const HandleOnClick = () => {
    const fourthList = document.querySelectorAll(".uList");
    const liComp = fourthList[0].children[3];
    liComp.classList.add("activeLink");
  };

  return (
    <div className="pageWrapper">
      <img
        alt="successful"
        className="alignCenter spaceTopXLarge successful"
        src="/resources/tickMarkLogo.png"
      ></img>
      <h1 className="alignCenter marginEnd">
        Congratulations, {state.WorkspaceName ? state.WorkspaceName : "team"}!
      </h1>
      <p className="alignCenter">
        You have completed onboarding,you can start using the Eden!
      </p>
      <button onClick={HandleOnClick}>Launch Eden</button>
    </div>
  );
};

export default Page4;
