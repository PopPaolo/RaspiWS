import React, { useState, useEffect } from "react";
import SmSquare from "./SmSquare";

function Board() {
  const [sudokuGrid, setSudokuGrid] = useState([]);

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

  return (
    <div className="position-absolute top-10 start-50 translate-middle-x"
         style={{
             top: "10vh",
         }}>
      <div className="container">
        {sudokuGrid.map((row, rowIndex) => (
          <div key={rowIndex} className="d-flex">
            {row.map((num, cellIndex) => (
              <SmSquare num={num} rowIndex={rowIndex} cellIndex={cellIndex} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Board;
