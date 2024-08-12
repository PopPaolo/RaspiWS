/*
    This is the file that defines the highest level of the React app.
    @author Paolo Pop
*/


//Style
import "./App.css";

// Functionality
import { useMediaQuery, useTheme } from "@mui/material";
import { vpSize } from "./vpSize";

// Page components
import Home from "./components/Home";
import Sudoku from "./components/Sudoku/Sudoku";

function App() {
  // Get device breakpoints
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));
  const isMed = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLarge = useMediaQuery(theme.breakpoints.down("lg"));

  // Set something to track the viewport size for responsive design 

  return (
    <>
      {/* <Home /> */}
      <Sudoku />
    </>
  );
}

export default App;
