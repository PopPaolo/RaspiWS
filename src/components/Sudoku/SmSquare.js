import React from "react";

const SmSquare = ({ size, num, rowIndex, cellIndex, updateCell }) => {
  const isSmall = size === "small";
  const isMid = size === "medium";

  const numFontSize = isSmall ? "6vw" : isMid ? "5vw" : "3vw";
  const boxSide = isSmall ? "8vw" : isMid ? "7vw" : "4vw";

  // Function to determine the border style
  const getBorderStyle = (rowIndex, cellIndex) => {
    let classes = "";
    if (rowIndex % 3 === 0) classes += ` border-top border-4 border-black`;
    if (cellIndex % 3 === 0) classes += ` border-start border-4 border-black`;
    if ((rowIndex + 1) % 9 === 0)
      classes += ` border-bottom border-4 border-black`;
    if ((cellIndex + 1) % 9 === 0)
      classes += ` border-end border-4 border-black`;
    return classes;
  };

  return (
    <div className={getBorderStyle(rowIndex, cellIndex)}>
      <button
        key={cellIndex}
        type="button"
        onClick={() => updateCell(rowIndex, cellIndex)}
        className="d-flex justify-content-center align-items-center border-dark-subtle border border-1"
        style={{
          width: boxSide,
          height: boxSide,
          fontSize: numFontSize,
        }}
      >
        {num === 0 ? "" : num}
      </button>
    </div>
  );
};

export default SmSquare;
