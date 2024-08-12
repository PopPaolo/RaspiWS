/*
    This is the file that defines the highest level of the React app.
    @author Paolo Pop
*/


//Style
import "./App.css";

// Functionality
import { useMediaQuery, useTheme } from "@mui/material";
import { vpSize } from "./vpSize";
import{ useState, useEffect } from 'react';

// Page components
import Home from "./components/Home";
import Sudoku from "./components/Sudoku/Sudoku";
import Conjugator from "./components/Conjugator/Conjugator";

function App() {
  // Get device breakpoints
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));
  const isMed = useMediaQuery(theme.breakpoints.between("sm", "md"));

  // State to track the viewport size
  const [viewportSize, setViewportSize] = useState(
      isSmall ? vpSize.SMALL : (isMed ? vpSize.MEMDIUM : vpSize.LARGE)
  );

  // Effect to update the viewport size on resize
  useEffect(() => {
    const handleResize = () => {
      let newSize = isSmall ? vpSize.SMALL : (isMed ? vpSize.MEMDIUM : vpSize.LARGE);
      setViewportSize({
        newSize,
      });
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div>
        <p>{`Viewport is ${viewportSize}`}</p>
      </div>
       <Home />
      {/*<Sudoku />*/}
      {/*<Conjugator/>*/}
    </>
  );
}

export default App;
