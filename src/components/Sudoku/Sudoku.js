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
    <>
      <div>
        <h1
          className={"position-absolute start-50 translate-middle-x"}
          style={{
            top: "2vh",
          }}
        >
          Sudoku | 数独
        </h1>
        <Board
          size={size}
          currentNumber={currentNumber}
          updateNumber={setCurrentNumber}
        />
        <NumberLegend size={size} updateNumber={setCurrentNumber} />
      </div>
    </>
  );
}

export default Sudoku;
