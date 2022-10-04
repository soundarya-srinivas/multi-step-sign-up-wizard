import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { formContext } from "../App";

const Page3 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(formContext);
  const [toggle, settoggle] = useState(state.toggle);

  useEffect(() => {
    const thirdList = document.querySelectorAll(".uList");
    const liComp = thirdList[0].children[2];
    if (liComp && !liComp.classList.contains("completed")) {
      liComp.classList.remove("contentBackground");
      liComp.classList.add("halfCompleted");
      liComp.classList.add("activeLink");
    }
  }, []);

  const HandleCardClick = (e) => {
    settoggle(!toggle);
  };

  const HandleOnclick = () => {
    dispatch({ type: "page3", payload: { toggle: toggle } });
    const thirdList = document.querySelectorAll(".uList");
    const liComp = thirdList[0].children[2];
    liComp.classList.remove("halfCompleted");
    liComp.classList.add("activeLink");
    liComp.classList.add("completed");
    navigate("/page4");
  };

  return (
    <div className="pageWrapper">
      <h2 className="marginEnd alignCenter">How are you planning to use Eden?</h2>
      <span className="alignCenter innerText ">
        We'll streamline your setup experience accordingly.
      </span>
      <div className="cardWrapper">
        <div
          onClick={HandleCardClick}
          style={{
            border: toggle ? "1px solid #6851df" : "1px solid lightgray",
          }}
          className="card spaceTopLarge"
        >
          <img alt="person" src="/resources/personLogo.png"></img>
          <h4>For myself</h4>
          <p>
            Write better. Think <br />
            more clearly.Stay
            <br /> organized.
          </p>
        </div>
        <div
          onClick={HandleCardClick}
          style={{
            border: toggle ? "1px solid lightgray" : "1px solid #6851df",
          }}
          className="card spaceTopLarge"
        >
          <img alt="people" src="/resources/peopleLogo.png"></img>
          <h4>With my team</h4>
          <p>
            Wikis,docs,tasks &amp;
            <br /> projects,all in one
            <br />
            place.
          </p>
        </div>
      </div>
      <button onClick={HandleOnclick}>Create Workspace</button>
    </div>
  );
};

export default Page3;
