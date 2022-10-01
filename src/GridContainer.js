import { default as GS } from "./GridSquare";
import { useEffect, useState } from "react";
import uuid from "react-uuid";

const GridContainer = () => {
  const [gc, setGC] = useState({
    gridItems: [],
    currentColor: "",
    inactiveColor: "white",
    mouseDown: null,
    gridSquareSize: 5,
    lockedColors: [],
    // gridDimensions: { x: 32, y: 18 }, //576 total squares
    gridDimensions: { x: 20, y: 20 }, //576 total squares
    plantData: [],
    gcStyle: {},
  });

  const drawGrid = (gridInfo) => {
    if (gridInfo?.length < 1) gridInfo = null;
    //let currentGridDimensions = gc.gridDimensions;

    let row = 0;
    let column = 0;

    var gridItems = [];

    // create a grid
    let { x, y } = gc.gridDimensions; //currentGridDimensions;

    let gcStyle = {
      gridTemplateColumns: `1fr repeat(${x - 1}, ${gc.gridSquareSize}rem)`,
      width: `${gc.gridSquareSize * x}rem`,
    };

    for (let i = 0; i < x * y; i++) {
      // check which row we're on by doing i mod x
      // if it returns anything other than 0 we're not at
      // the end of the row yet
      if (!gridInfo && i >= x && i % x == 0) {
        row++;
        column = 0;
      }

      console.log(i, x, y);
      let gi = gridInfo ? gridInfo[i] : null;
      //console.log("gi", gridInfo);
      let currentGi = !gridInfo ? (
        <GS key={uuid()} column={column} row={row} index={i} />
      ) : (
        <GS
          key={uuid()}
          column={column}
          row={row}
          index={i}
          selectedColor={gi.selectedColor}
        />
      );

      //console.log(currentGi);
      gridItems.push(currentGi);

      //let lastItem = gc.gridItems[gc.gridItems.length - 1];
      //lastItem.rgbColor = $(`#${lastItem.gridId}`).css("backgroundColor");
      //console.log(lastItem.rgbColor);

      if (i == x * y - 1) setGC({ ...gc, gcStyle, gridItems, loading: false });

      column++;
    }
  };

  useEffect(() => {
    if (!gc.gridItems.length) {
      drawGrid();
    }
  });

  if (gc.loading) return <h1>Loading...</h1>;

  console.log(gc.gridItems);

  return (
    <div className="gridContainer" style={gc.gcStyle} key={uuid()}>
      {gc.gridItems}
    </div>
  );
};

export default GridContainer;
