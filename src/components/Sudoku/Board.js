/*
    Board.js defines the design and functionality 
    for the sudoku board used in Sudoku.js.
    @author Paolo Pop
*/


// ######################## FUNCTIONALITY ########################
// #
import React, { useState, useEffect } from "react";
// #
// ###############################################################


// ####################### APP COMPONENTS ########################
// # Functional
import SmSquare from "./SmSquare";
// #
// ###############################################################


const Board = ({ size, currentNumber, updateNumber }) => {
  const [sudokuGrid, setSudokuGrid] = useState([]);
  const isSmall = size === "small";
  const isMid = size === "medium";

  // Define the API endpoint
  // const apiUrl = "https://sudoku-api.vercel.app/api/dosuku";
  const apiUrl = "https://www.youdosudoku.com/api";

  // Turn a passed string, with length of 81, into a array[9][9]
  function makeArray(key) {
    const sudokuArray = [];
    for (let i = 0; i < 9; i++) {
      sudokuArray.push(key.slice(i * 9, (i + 1) * 9).split(''));
    }
    return sudokuArray;
  }

  // Fetch a Sudoku puzzle 
  useEffect(() => {
    fetch(apiUrl, {
      method: "POST",
      // headers: {
      //   "Content-Type": "application/json",
      // },
      body: JSON.stringify({
        difficulty: "medium", // "easy", "medium", or "hard" (defaults to "easy")
        solution: true, // true or false (defaults to true)
        array: true // true or false (defaults to false)
      })
    }).then(response => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }
      return response.json()
    }).then(data => {
      // console.log(makeArray(data.puzzle))
      setSudokuGrid(makeArray(data.puzzle))
    }
    ).catch(error =>
      console.log(error)
    )
  }, []);

  function updateCell(rowIndex, colIndex) {
    if (sudokuGrid[rowIndex][colIndex] === '0') {
      // Update the selected cell with the currently selected number
      let newGrid = [...sudokuGrid];
      newGrid[rowIndex][colIndex] = currentNumber;
      setSudokuGrid(newGrid);

      // updateNumber("0"); 
    }
  }

  return (
    <div className={"d-flex border-3 border-dark bg-dark rounded-2 p-2"}>
      {
        sudokuGrid.map(
          (row, rowIndex) => (
            <div key={rowIndex}>
              {
                row.map(
                  (num, colIndex) => (
                    <SmSquare
                      size={size}
                      num={num}
                      rowIndex={rowIndex}
                      colIndex={colIndex}
                      updateCell={updateCell}
                    />
                  ))
              }
            </div>
          ))
      }
    </div>
  );
}

export default Board;