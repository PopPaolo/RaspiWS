/*
    Board.js defines the design and functionality 
    for the sudoku board used in Sudoku.js.
    @author Paolo Pop
*/


// ####################### APP COMPONENTS ########################
// # Functional
import SmSquare from "./SmSquare";
// #
// ###############################################################


// ######################## FUNCTIONALITY ########################
// #
import React, { useState, useEffect } from "react";
const sudoku = require("sudoku");
// #
// ###############################################################


const Board = ({ size, currentNumber, updateNumber }) => {
  const [sudokuGrid, setSudokuGrid] = useState([]);
  const [solvedGrid, setSolsolvedGrid] = useState([]);
  const isSmall = size === "small";
  const isMid = size === "medium";

  // Turn a passed string, with length of 81, into a array[9][9]
  function makeArray(key) {
    const sudokuArray = [];
    for (let i = 0; i < 9; i++) {
      let row = key.slice(i * 9, i * 9 + 9).map(value => value !== null ? value + 1 : value);
      sudokuArray.push(row);
    }
    return sudokuArray;
  }

  // Generate a Sudoku puzzle
  useEffect(() => {
    const puzzle = sudoku.makepuzzle();
    setSolsolvedGrid(makeArray(sudoku.solvepuzzle(puzzle)));
    setSudokuGrid(makeArray(puzzle));
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
                        key={`${rowIndex}-${colIndex}`}
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