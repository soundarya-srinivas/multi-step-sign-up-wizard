import React, { useContext, useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { formContext } from "../App";
import "../componentsStyle.css";

const Page1 = () => {
  const navigate = useNavigate();// to navigate from one page to another
  const { state, dispatch } = useContext(formContext); //consuming state values from context 
  const [fullname, setfullname] = useState(state.fullname);
  const [displayname, setdisplayname] = useState(state.displayname);
  const fullnameSpan = useRef();
  const displaySpan = useRef();

  useEffect(() => {
    // getting hold of element to apply css after components mounted
    const FirstList = document.querySelectorAll(".uList");
    const liComp = FirstList[0].children[0];

    if (liComp && !liComp.classList.contains("completed")) {
      liComp.classList.remove("contentBackground");
      liComp.classList.add("activeLink");
      liComp.classList.add("halfCompleted");
    }
  }, []);

  const HandleOnclick = () => {
    if (fullname === "" && displayname === "") {
      fullnameSpan.current.style.display = "block";
      displaySpan.current.style.display = "block";
    } else if (fullname === "") {
      fullnameSpan.current.style.display = "block";
    } else if (displayname === "") {
      displaySpan.current.style.display = "block";
    } else {
      dispatch({
        type: "page1",
        payload: { fName: fullname, dName: displayname },
      });
      const FirstList = document.querySelectorAll(".uList");
      const liComp = FirstList[0].children[0];

      fullnameSpan.current.style.display = "none";
      displaySpan.current.style.display = "none";

      liComp.classList.remove("halfCompleted");
      
      liComp.classList.add("completed");

      navigate("/page2");
    }
  };

  return (
    <div className="pageWrapper">
      <h1 className="alignCenter marginEnd">Welcome! First things first...</h1>
      <span className="alignCenter innerText">
        You can always change them later.
      </span>
      <div className="inputsWrapper">
        <label htmlFor="fullName">Full Name</label>
        <input
          id="fullName"
          type="text"
          placeholder="Steve Jobs"
          value={fullname}
          onChange={(e) => setfullname(e.target.value)}
        ></input>
        <span ref={fullnameSpan} className="hideComponent required">
          Full name is mandatory...!
        </span>
        <label htmlFor="DisplayName" className="spaceTopMedium">
          Display Name
        </label>
        <input
          id="DisplayName"
          type="text"
          placeholder="Steve"
          value={displayname}
          onChange={(e) => setdisplayname(e.target.value)}
        ></input>
        <span ref={displaySpan} className="hideComponent required">
          Display name is mandatory...!
        </span>
      </div>
      <button onClick={HandleOnclick}>Create Workspace</button>
    </div>
  );
};

export default Page1;
