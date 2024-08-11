import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";

const SmSquare = ({ num, rowIndex, cellIndex }) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const fontSize = isMatch ? "7vw" : "5vh";
  const boxSide = isMatch ? "9vw" : "8vh";
  const borderThickness = isMatch ? "2" : "5";

  const numValue = num === 0 ? "" : num;

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
      <div
        key={`${cellIndex}${rowIndex}`}
        className="d-flex justify-content-center align-items-center border-dark-subtle border border-1"
        style={{
          width: boxSide,
          height: boxSide,
          fontSize: fontSize,
        }}
      >
        {numValue}
        {/*<input*/}
        {/*  type={"text"}*/}
        {/*  placeholder={numValue}*/}
        {/*  className="d-flex justify-content-center align-items-center border-dark-subtle border border-1"*/}
        {/*  style={{*/}
        {/*    width: boxSide,*/}
        {/*    height: boxSide,*/}
        {/*    fontSize: fontSize,*/}
        {/*  }}*/}
        {/*/>*/}
      </div>
    </div>
  );
};

export default SmSquare;
