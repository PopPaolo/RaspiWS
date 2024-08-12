import { useState } from "react";

import Board from "./Board";
import NumberLegend from "./NumberLegend";

function Sudoku({ size }) {
  const [currentNumber, setCurrentNumber] = useState(0);

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
