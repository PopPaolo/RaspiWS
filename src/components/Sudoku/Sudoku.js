/*
    Sudoku.js defines the design and
    functionality for the Sudoku game and page.
    @author Paolo Pop
*/
import { useState } from "react"

import Board from "./Board"
import NumberLegend from "./NumberLegend"
import Controls from "./Controls"

function Sudoku({ size }) {
  const [currentNumber, setCurrentNumber] = useState(null)
  const [editSymbols, setEditSymbols] = useState(false)
  const [symbols, setSymbols] = useState([
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
  ])

  // TODO
  //  Implement the selection of a cell on the board
  //  and then a number in the legend to fill the cell.
  const [selectedCell, setSelectedCell] = useState([])

  return (
    <div className="d-flex flex-column gap-0">
      <div className={"fw-bold fs-1 position-absolute start-50 top-0 translate-middle-x"}>{" Sudoku | 数独 "}</div>
      <div
        className={
          "d-flex flex-column flex-lg-row gap-2 gap-lg-3 align-items-end " +
          "position-absolute top-50 start-50 translate-middle"
        }
      >
        <Board size={size} currentNumber={currentNumber} symbols={symbols} />
        <div className={"d-flex flex-lg-column"}>
          <Controls editSymbols={editSymbols} setEditSymbols={setEditSymbols} setSymbols={setSymbols} />
          <NumberLegend
            size={size}
            updateNumber={setCurrentNumber}
            editSymbols={editSymbols}
            symbols={symbols}
            setSymbols={setSymbols}
          />
        </div>
      </div>
    </div>
  )
}

export default Sudoku
