/*
    Sudoku.js defines the design and 
    functionality for the Sudoku game and page.
    @author Paolo Pop
*/
import { useState } from "react";

import Board from "./Board";
import NumberLegend from "./NumberLegend";

function Sudoku({ size }) {
  const [currentNumber, setCurrentNumber] = useState("0");
  // TODO
  // To implement for the selection of a cell and then a number to fill the cell
  const [selectedCell, setSelectedCell] = useState([]);

  const isSmall = size === "small";
  const isMid = size === "medium";

  return (
    // Trying to make a flexbox with the title div and the game components
    <div className="d-flex flex-column gap-0">
      <div
        className={"fw-bold fs-1 position-absolute start-50 translate-middle-x"}
      >
        {" Sudoku | 数独 "}
      </div>
      <div className={
        "d-flex flex-column flex-lg-row gap-5 align-items-center " +
        "position-absolute top-50 start-50 translate-middle"}
      >
        <Board
          size={size}
          currentNumber={currentNumber}
          updateNumber={setCurrentNumber}
        />
        <NumberLegend size={size} updateNumber={setCurrentNumber} />
      </div>
    </div>
  );
}

export default Sudoku;
