/*
    This is the file that defines the highest level of the React app.
    @author Paolo Pop
*/

//Style
import "./App.css";

// Functionality
import { useMediaQuery, useTheme } from "@mui/material";
import { vpSize } from "./vpSize";
import { useState, useEffect } from "react";

// Page components
import Home from "./components/Home";
import Sudoku from "./components/Sudoku/Sudoku";
import Conjugator from "./components/Conjugator/Conjugator";

function App() {
  // Set up viewport size tracking
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));
  const isMed = useMediaQuery(theme.breakpoints.between("md", "lg"));

  // State to track the viewport size
  const [viewportSize, setViewportSize] = useState(
    isSmall ? vpSize.SMALL : isMed ? vpSize.MEDIUM : vpSize.LARGE,
  );

  // Effect to update the viewport size on resize
  useEffect(() => {
    const handleResize = () => {
      setViewportSize(
        isSmall ? vpSize.SMALL : isMed ? vpSize.MEDIUM : vpSize.LARGE,
      );
    };

    handleResize(); // Call initially to set the correct size

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isSmall, isMed]);

  return (
    <>
      <div>
        <p>{`Viewport is ${viewportSize}`}</p>
      </div>
      {/*<Home />*/}
      <Sudoku size={viewportSize} />
      {/*<Conjugator/>*/}
    </>
  );
}

export default App;
