import "./App.css";
import Buttons from "./components/material-ui/buttons/Buttons";
import CheckBoxComp from "./components/material-ui/checkbox/CheckBoxComp";
// import StyledComponents from "./components/styled-comp/index";

function App() {
  return (
    <div className="App">
      <div className="Header">
        {/* <StyledComponents /> */}
        <CheckBoxComp />
        <Buttons />
      </div>
    </div>
  );
}

export default App;
