import "./App.css";
import NavBar from "./components/NavBar";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useReducer } from "react";
import { initialValue, reducer } from "./reducers/reducer";
import Header from "./components/Header";

// creating context to avoid props drilling and access state anywhere inside page
export const formContext = createContext();

function App() {
  // using useReducer to store user inputs 
  
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <formContext.Provider value={{ state, dispatch }}>
      <Router>
        <div className="App">
          <div className="wrapper">
            <Header />

            <NavBar />

            <Routes>
              <Route exact path="/" element={<Page1 />}></Route>
              <Route exact path="/Page2" element={<Page2 />}></Route>
              <Route exact path="/Page3" element={<Page3 />}></Route>
              <Route exact path="/Page4" element={<Page4 />}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </formContext.Provider>
  );
}

export default App;
