import React, { useState, useEffect } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import SmSquare from "./SmSquare";

function Board({ currentNumber }) {
  const [sudokuGrid, setSudokuGrid] = useState([]);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  // const topMargin = isMatch ? "9vh" : "13vh";
  const boardPositionClass = isMatch ? "position-absolute top-50 translate-middle start-50" : "top-50 translate-middle-y position-absolute end-50"

  // Define the API endpoint
  const apiUrl = "https://sudoku-api.vercel.app/api/dosuku";

  // Function to fetch a Sudoku puzzle
  async function fetchSudoku() {
    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        const key = data.newboard.grids[0].value;
        setSudokuGrid(key);
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  }

  useEffect(() => {
    fetchSudoku();
  }, []);

  function updateCell(row, col) {
    const newGrid = [...sudokuGrid];
    // newGrid[row] = [...newGrid[row]];
    // Update the specific cell
    newGrid[row][col] = currentNumber;
    // Set the new grid as the state
    setSudokuGrid(newGrid);
  }

  return (
    <div className={boardPositionClass}>
      <div className="container">
        {sudokuGrid.map((row, rowIndex) => (
          <div key={rowIndex} className="d-flex">
            {row.map((num, cellIndex) => (
              <SmSquare
                num={num}
                rowIndex={rowIndex}
                cellIndex={cellIndex}
                updateCell={updateCell}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Board;
