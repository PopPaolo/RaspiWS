import React, { useState, useEffect } from "react";
import SmSquare from "./SmSquare";

const Board = ({ size, currentNumber, updateNumber }) => {
  const [sudokuGrid, setSudokuGrid] = useState([]);
  const isSmall = size === "small";
  const isMid = size === "medium";

  const boardPositionClass = isSmall
    ? "position-absolute top-50 start-50 translate-middle"
    : isMid
    ? "position-absolute top-50 start-50 translate-middle"
    : "position-absolute top-50 translate-middle-y end-50";

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
    if (sudokuGrid[row][col] === 0) {
      const newGrid = [...sudokuGrid];

      newGrid[row][col] = currentNumber;

      setSudokuGrid(newGrid);
    }
  }

  return (
    <div className={boardPositionClass}>
      {sudokuGrid.map((row, rowIndex) => (
        <div key={rowIndex} className="d-flex">
          {row.map((num, cellIndex) => (
            <SmSquare
              size={size}
              num={num}
              rowIndex={rowIndex}
              cellIndex={cellIndex}
              updateCell={updateCell}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
