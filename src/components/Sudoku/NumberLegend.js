/*
    NumberLegend.js defines the design and functionality 
    for the interactive number legend used in Sudoku.js.
    @author Paolo Pop
*/

// ######################## FUNCTIONALITY ########################
// #
import React, { useState } from "react"
// #
// ###############################################################

function NumberLegend({ size, updateNumber, editSymbols, symbols, setSymbols }) {
  const [selectedIndex, setSelectedIndex] = useState([])
  // Move symbols up to Sudoku.js level

  const isSmall = size === "small"
  const isMid = size === "medium"

  const fontSize = isSmall ? "6vw" : isMid ? "5vw" : "7vh"
  const boxSide = isSmall ? "13vw" : isMid ? "7vw" : "8vh"

  function NumBlock({ num, rowIndex, colIndex }) {
    const isSelected = JSON.stringify(selectedIndex) === JSON.stringify([rowIndex, colIndex])
    // The block will have a light blue background if it matches the currently selected number

    function getNum(symbol) {
      // Convert a given symbol to it's numerical equivalent on a 3x3 array
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (symbols[i][j] === symbol) {
            return i * 3 + (j + 1)
          }
        }
      }
      return null
    }

    return (
      <button
        type="button"
        className={"d-flex justify-content-center align-items-center border-3 border-dark rounded-3 m-1"}
        onClick={() => {
          updateNumber(getNum(num))
          setSelectedIndex([rowIndex, colIndex])
        }}
        style={{
          width: boxSide,
          height: boxSide,
          fontSize: fontSize,
          backgroundColor: isSelected ? "lightblue" : "whitesmoke",
          border: "solid",
        }}
      >
        {num}
      </button>
    )
  }

  const EditBlock = ({ num, rowIndex, colIndex }) => {
    return (
      <input
        type="text"
        className={"d-flex justify-content-center align-items-center text-center border-3 border-dark rounded-3 m-1"}
        style={{
          width: boxSide,
          height: boxSide,
          fontSize: fontSize,
          border: "solid",
        }}
        placeholder={num}
        onBlur={(e) => {
          // TODO
          //  Change to only allow one character long inputs
          //  and give and error message about it.

          updateSymbol(e.target.value, rowIndex, colIndex)
        }}
      />
    )
  }

  function updateSymbol(newSymbol, rowIndex, colIndex) {
    if (newSymbol !== "") {
      let newSymbols = [...symbols]
      newSymbols[rowIndex][colIndex] = newSymbol

      setSymbols(newSymbols)
    }
  }

  return (
    <div>
      {editSymbols ? (
        <div className={"d-flex flex-column"}>
          {symbols.map((row, rowIndex) => (
            <div key={rowIndex} className={"d-flex flex-row"}>
              {row.map((symbol, symbolIndex) => {
                return (
                  <EditBlock
                    key={`${rowIndex}-${symbolIndex}`}
                    num={symbol}
                    rowIndex={rowIndex}
                    colIndex={symbolIndex}
                  />
                )
              })}
            </div>
          ))}
        </div>
      ) : (
        <div className={"d-flex flex-column"}>
          {symbols.map((row, rowIndex) => (
            <div key={rowIndex} className={"d-flex flex-row"}>
              {row.map((symbol, symbolIndex) => {
                return (
                  <NumBlock
                    key={`${rowIndex}-${symbolIndex}`}
                    num={symbol}
                    rowIndex={rowIndex}
                    colIndex={symbolIndex}
                  />
                )
              })}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default NumberLegend
