import React, { useContext, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { formContext } from "../App";

// consists of form-2

const Page2 = () => {
  const navigate = useNavigate(); // to navigate from one page to another
  const { state, dispatch } = useContext(formContext);
  const [WorkspaceName, setWorkspaceName] = useState(state.WorkspaceName);
  const [url, seturl] = useState(state.url);
  const WorkspaceNameSpan = useRef();

  useEffect(() => {
    // getting hold of element to apply css
    const secondList = document.querySelectorAll(".uList");
    const liComp = secondList[0].children[1];

    if (liComp && !liComp.classList.contains("completed")) {
      liComp.classList.remove("contentBackground");
      liComp.classList.add("activeLink");
      liComp.classList.add("halfCompleted");
    }
  }, []);

  const HandleOnclick = () => {
    if (WorkspaceName === "") {
      WorkspaceNameSpan.current.style.display = "block";
    } else {
      dispatch({
        type: "page2",
        payload: { WorkspaceName: WorkspaceName, url: url },
      });
      WorkspaceNameSpan.current.style.display = "none";
      const secondList = document.querySelectorAll(".uList");
      const liComp = secondList[0].children[1];
      liComp.classList.remove("halfCompleted");
      liComp.classList.add("activeLink");
      liComp.classList.add("completed");

      navigate("/page3");
    }
  };
  return (
    <div className="pageWrapper">
      <h1>Let's set up a home for all your work</h1>
      <span className="alignCenter  innerText">
        You can always create another workspace later.
      </span>
      <div className="inputsWrapper spaceTopLarge">
        <label className="spaceTop" htmlFor="WorkspaceName">
          Workspace Name
        </label>
        <input
          className="spaceTop"
          id="WorkspaceName"
          type="text"
          placeholder="Eden"
          value={WorkspaceName}
          onChange={(e) => setWorkspaceName(e.target.value)}
        ></input>
        <span ref={WorkspaceNameSpan} className="hideComponent required">
          WorkspaceName is mandatory...!
        </span>
        <label className="spaceTop" htmlFor="URL">
          Workplace URL(optional)
        </label>
        <div className="urlWrapper">
          <output
            className="exampleURL spaceTop"
            type="text"
            placeholder="www.aden.com/"
          >
            www.eden.com/
          </output>
          <input
            className="url spaceTop"
            id="URL"
            type="text"
            placeholder="Example"
            value={url}
            onChange={(e) => seturl(e.target.value)}
            style={{
              borderLeft: "none",
              borderTopLeftRadius: "0px",
              borderBottomLeftRadius: "0px",
            }}
          ></input>
        </div>
      </div>
      <button onClick={HandleOnclick}>Create Workspace</button>
    </div>
  );
};

export default Page2;
