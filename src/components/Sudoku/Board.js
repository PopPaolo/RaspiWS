/*
    Board.js defines the design and functionality 
    for the sudoku board used in Sudoku.js.
    @author Paolo Pop
*/

// ####################### APP COMPONENTS ########################
// # Functional
import SmSquare from "./SmSquare"
// #
// ###############################################################

// ######################## FUNCTIONALITY ########################
// #
import React, { useState, useEffect } from "react"

const sudoku = require("sudoku")
// #
// ###############################################################

const Board = ({ size, currentNumber, symbols }) => {
  const [sudokuGrid, setSudokuGrid] = useState([])
  const [solvedGrid, setSolvedGrid] = useState([])

  // Turn a passed string, with length of 81, into a 2D 9x9 array
  function makeArray(key) {
    const sudokuArray = []
    for (let i = 0; i < 9; i++) {
      let row = key.slice(i * 9, i * 9 + 9).map((value) => (value !== null ? value + 1 : value))
      sudokuArray.push(row)
    }
    return sudokuArray
  }

  // Generate a Sudoku puzzle
  useEffect(() => {
    const puzzle = sudoku.makepuzzle()
    setSolvedGrid(makeArray(sudoku.solvepuzzle(puzzle)))
    setSudokuGrid(makeArray(puzzle))
  }, [])

  function updateCell(rowIndex, colIndex) {
    if (sudokuGrid[rowIndex][colIndex] === null) {
      // Update the selected cell with the currently selected number
      let newGrid = [...sudokuGrid]
      newGrid[rowIndex][colIndex] = currentNumber
      setSudokuGrid(newGrid)
    }
  }

  // Map the numbers to their corresponding symbols
  function getSymbol(num) {
    // num will be null or have a value of 1-9
    if (num === null) return null

    // Calculate the row and column index
    const row = Math.floor((num - 1) / 3)
    const col = (num - 1) % 3

    return symbols[row][col]
  }

  return (
    <div className={"d-flex border-3 border-dark bg-dark rounded-2 p-1"}>
      {sudokuGrid.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((num, colIndex) => (
            <SmSquare
              key={`${rowIndex}-${colIndex}`}
              size={size}
              num={getSymbol(num, rowIndex, colIndex)}
              rowIndex={rowIndex}
              colIndex={colIndex}
              updateCell={updateCell}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default Board
