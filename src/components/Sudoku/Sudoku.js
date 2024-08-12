import { useTheme, useMediaQuery } from "@mui/material";
import Board from "./Board";
import NumberLegend from "./NumberLegend";
import { useState } from "react";

function Sudoku() {
    const [currentNumber, setCurrentNumber] = useState("0")

    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("md"));
    const isMid = useMediaQuery(theme.breakpoints.between("md", "md"));

    // Calculate the font size for the text (1/4 of the screen height)
    const fontSizeTitle = isSmall ? "8vh" : (isMid ? "15vh" : "20vh");
    const topMargin = isSmall ? "-2vh" : (isMid ? "-5vh" : "-7vh");
    const fontSizeAuthor = isSmall ? "3vh" : (isMid ? "7vh" : "10vh");
    const fontSizeCredits = isSmall ? "6vh" : (isMid ? "7vh" : "10vh");

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
                <Board currentNumber={currentNumber}/>
                <NumberLegend />
            </div>
        </>
    );
}

export default Sudoku;
