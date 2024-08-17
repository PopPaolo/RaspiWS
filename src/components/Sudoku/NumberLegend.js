/*
    NumberLegend.js defines the design and functionality 
    for the interactive number legend used in Sudoku.js.
    @author Paolo Pop
*/


// ######################## FUNCTIONALITY ########################
// #
import React, { useState } from "react";
// #
// ###############################################################


function NumberLegend({ size, updateNumber }) {
    const [selectedNum, setSelectedNum] = useState("0")
    // Move symbols up to Sudoku.js level
    const [symbols, setSymbols] = useState(["1", "2", "3", "4", "5", "6", "7", "8", "9"])
    const isSmall = size === "small";
    const isMid = size === "medium";

    const fontSize = isSmall ? "6vw" : isMid ? "5vw" : "7vh";
    const boxSide = isSmall ? "9vw" : isMid ? "7vw" : "8vh";

    const NumBlock = ({ num }) => {
        // The block will have a light blue background if it matches the currently selected number
        const isSelected = num === selectedNum;

        return (
            <button
                type="button"
                className={"d-flex justify-content-center align-items-center " +
                    " border-2 border-dark rounded-3"
                }
                onClick={() => {
                    updateNumber(num)
                    setSelectedNum(num)
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

    const SymbolBlock = ({ symbol, index }) => {
        return (
            <input
                key={index}
                type="text"
                className={"d-flex justify-content-center align-items-center " +
                    " border-2 border-dark rounded-3"}
                style={{
                    width: boxSide,
                    height: boxSide,
                    fontSize: fontSize,
                    border: "solid",
                }}
                placeholder={symbol}
                onBlur={(e) => { updateSymbol(e.target.value, index) }}
            />
        );
    }

    function updateSymbol(newSymbol, index) {
        if (newSymbol !== "") {
            let newSymbols = [...symbols];
            newSymbols[index] = newSymbol;

            setSymbols(newSymbols);
        }
    }

    return (
        <div
            className={"d-flex flex-column flex-lg-row gap-4"}
        >
            <div
                className={"d-flex flex-row flex-lg-column gap-1"}
            >
                {/* {symbols.map(
                    (symbol, symbolIndex) => {
                        console.log(symbol);
                        <NumBlock num={symbol} key={symbolIndex} />
                    })
                } */}
                <NumBlock num={symbols[0]} index={0} />
                <NumBlock num={symbols[1]} index={1} />
                <NumBlock num={symbols[2]} index={2} />
                <NumBlock num={symbols[3]} index={3} />
                <NumBlock num={symbols[4]} index={4} />
                <NumBlock num={symbols[5]} index={5} />
                <NumBlock num={symbols[6]} index={6} />
                <NumBlock num={symbols[7]} index={7} />
                <NumBlock num={symbols[8]} index={8} />
            </div>
            <div
                className={"d-flex flex-row flex-lg-column gap-1"}
            >
                {symbols.map((symbol, symbolIndex) => {
                    <SymbolBlock symbol={symbol} index={symbolIndex} />
                })}
                <SymbolBlock symbol={1} index={0} />
                <SymbolBlock symbol={2} index={1} />
                <SymbolBlock symbol={3} index={2} />
                <SymbolBlock symbol={4} index={3} />
                <SymbolBlock symbol={5} index={4} />
                <SymbolBlock symbol={6} index={5} />
                <SymbolBlock symbol={7} index={6} />
                <SymbolBlock symbol={8} index={7} />
                <SymbolBlock symbol={9} index={8} />
            </div>
        </div>
    )
}

export default NumberLegend;