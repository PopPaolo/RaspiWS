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
import { useMediaQuery, createTheme } from "@mui/material";
import { vpSize } from "./vpSize";
import { useState, useEffect, useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// #
// ###############################################################

// ####################### APP COMPONENTS ########################
// # Functional
import Navbar from "./components/NavBar";
// # Non-Functional
import Home from "./components/Home/Home";
import Sudoku from "./components/Sudoku/Sudoku";
import VerbsPage from "./components/Conjugator/VerbsPage";
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
  const scrollContainerRef = useRef(null);

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

  // Effect to scroll to the right
  useEffect(() => {
    const handleScroll = (event) => {
      if (event.deltaY !== 0) {
        scrollContainerRef.current.scrollLeft += event.deltaY;
        event.preventDefault();
      }
    };

    const scrollContainer = scrollContainerRef.current;
    scrollContainer.addEventListener("wheel", handleScroll);

    return () => {
      scrollContainer.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <BrowserRouter>
      <div
        className="d-flex overflow-hidden"
        ref={scrollContainerRef}
        style={{
          height: "100vh",
          whiteSpace: "nowrap",
          maxHeight: "-webkit-fill-available",
        }}>
        <Navbar />
        <div
          // className="bg-dark-subtle"
          style={{
            marginLeft: "5vw"
          }} >
          <Routes>
            <Route path="/" element={<Home size={viewportSize} />} />
            <Route path="/sudoku" element={<Sudoku size={viewportSize} />} />
            <Route path="/conjugator" element={<VerbsPage />} />
          </Routes>
        </div >
      </div>
    </BrowserRouter>
  );
}

export default App;
