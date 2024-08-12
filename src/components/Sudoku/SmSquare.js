import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";

const SmSquare = ({ num, rowIndex, cellIndex, updateCell }) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const fontSize = isMatch ? "6vw" : "3vw";
  const boxSide = isMatch ? "9vw" : "4vw";
  const borderThickness = isMatch ? "2" : "5";


  // Function to determine the border style
  const getBorderStyle = (rowIndex, cellIndex) => {
    let classes = "";
    if (rowIndex % 3 === 0)
      classes += ` border-top border-${borderThickness} border-black`;
    if (cellIndex % 3 === 0)
      classes += ` border-start border-${borderThickness} border-black`;
    if ((rowIndex + 1) % 9 === 0)
      classes += ` border-bottom border-${borderThickness} border-black`;
    if ((cellIndex + 1) % 9 === 0)
      classes += ` border-end border-${borderThickness} border-black`;
    return classes;
  };

  return (
    <div className={getBorderStyle(rowIndex, cellIndex)}>
      <button
        key={`${cellIndex}${rowIndex}`}
        type="button"
        onClick={() => updateCell(rowIndex, cellIndex, 7)}
        className="d-flex justify-content-center align-items-center border-dark-subtle border border-1"
        style={{
          width: boxSide,
          height: boxSide,
          fontSize: fontSize,
        }}
      >
        {num !== 0 ? num : ""}
      </button>
    </div>
  );
};

export default SmSquare;
