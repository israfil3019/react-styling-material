import "./App.css";
import Buttons from "./components/material-ui/buttons/Buttons";
import CheckBoxComp from "./components/material-ui/checkbox/CheckBoxComp";
import StyledButton from "./components/material-ui/styled-button/StyledButton";
import TextFieldComp from "./components/material-ui/text-field/TextFieldComp";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { orange, green } from "@material-ui/core/colors";
import TypographyComp from "./components/material-ui/typography/TypographyComp";
// import StyledComponents from "./components/styled-comp/index";

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 38,
      marginBottom: 5,
    },
    subtitle1: {
      marginBottom: 10,
    },
  },
  palette: {
    primary: {
      main: orange[900],
    },
    secondary: {
      main: green[500],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="Header">
          {/* <StyledComponents /> */}
          <TypographyComp />
          <StyledButton />
          <TextFieldComp />
          <CheckBoxComp />
          <Buttons />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
