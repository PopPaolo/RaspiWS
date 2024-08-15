import React from "react";

const SmSquare = ({ size, num, rowIndex, colIndex, updateCell }) => {
  const isSmall = size === "small";
  const isMid = size === "medium";

  const numFontSize = isSmall ? "6vw" : isMid ? "5vw" : "3vw";
  const boxSide = isSmall ? "8vw" : isMid ? "7vw" : "4vw";

  // Function to determine the border style
  const getBorderStyle = () => {
    let classes = "";
    if (rowIndex === 2 || rowIndex === 5) classes += ` border-3 border-end border-black`;
    if (colIndex === 2 || colIndex === 5) classes += ` border-3 border-bottom border-black`;

    return classes;
  };

  return (
    <div className={getBorderStyle()}>
      <button
        key={colIndex}
        type="button"
        onClick={() => updateCell(rowIndex, colIndex)}
        className="d-flex justify-content-center align-items-center rounded-2 border-2 border-dark-subtle"
        style={{
          width: boxSide,
          height: boxSide,
          fontSize: numFontSize,
          borderStyle: "solid"
        }}
      >
        {num === "0" ? "" : num}
      </button>
    </div>
  );
};

export default SmSquare;
