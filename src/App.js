import "./App.css";
import Buttons from "./components/material-ui/buttons/Buttons";
import CheckBoxComp from "./components/material-ui/checkbox/CheckBoxComp";
import StyledButton from "./components/material-ui/styled-button/StyledButton";
import TextFieldComp from "./components/material-ui/text-field/TextFieldComp";
// import StyledComponents from "./components/styled-comp/index";

function App() {
  return (
    <div className="App">
      <div className="Header">
        {/* <StyledComponents /> */}
        <StyledButton />
        <TextFieldComp />
        <CheckBoxComp />
        <Buttons />
      </div>
    </div>
  );
}

export default App;
