import { useTheme, useMediaQuery } from "@mui/material";
import Board from "./Board";

function Sudoku() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  // Calculate the font size for the text (1/4 of the screen height)
  const fontSizeTitle = isMatch ? "8vh" : "15vh";
  const topMargin = isMatch ? "-2vh" : "-5vh";
  const fontSizeAuthor = isMatch ? "3vh" : "7vh";
  const fontSizeCredits = isMatch ? "6vh" : "7vh";

  return (
    <>
      <div>
        <h1
          className={"position-absolute start-50 translate-middle-x"}
          style={{
            top: "3vh",
          }}
        >
          Sudoku | 数独
        </h1>
        <Board />
      </div>
    </>
  );
}

export default Sudoku;
