/*
    This is the file that defines the highest level of the React app.
    @author Paolo Pop
*/

// ############################ STYLE ############################
// #
import "./App.css";
// #
// ###############################################################


// ######################## FUNCTIONALITY ########################
// #
import { useMediaQuery, useTheme, createTheme } from "@mui/material";
import { vpSize } from "./vpSize";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
// #
// ###############################################################


// ####################### APP COMPONENTS ########################
// # Functional
import Navbar from "./NavBar";
// # Non Functional
import Home from "./components/Home";
import Sudoku from "./components/Sudoku/Sudoku";
import Conjugator from "./components/Conjugator/Conjugator";
// #
// ###############################################################

const theme = createTheme({
  breakpoints: {
    values: {
      md: 768,
      lg: 992,
    },
  },
});
function App() {
  // Set up viewport size tracking
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
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home size={viewportSize} />} />
        <Route path="/sudoku" element={<Sudoku size={viewportSize} />} />
        {/* <Route path="/conjugator" element={<Conjugator />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
