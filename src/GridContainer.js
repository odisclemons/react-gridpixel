import { default as GS } from "./GridSquare";
import { useEffect, useState } from "react";
import uuid from "react-uuid";

const GridContainer = (props) => {
  const [gc, setGC] = useState({
    ...props
  });

  useEffect(() => {
    console.log("gsSize:", gc.gsSize);
  }, []);

  const drawGrid = (gridInfo) => {
    if (gridInfo?.length < 1) gridInfo = null;
    //let currentGridDimensions = gc.gridDimensions;

    let row = 0;
    let column = 0;

    var gridItems = [];

    let gsSize = gc.gsSize;
    let showCoords = gc.showCoords;

    // create a grid
    let { x, y } = gc.gridDimensions; //currentGridDimensions;

    let gcStyle = {
      gridTemplateColumns: `1fr repeat(${x - 1}, ${gsSize}rem)`,
      width: `${gsSize * x}rem`
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
        <GS
          key={uuid()}
          column={column}
          row={row}
          index={i}
          gsSize={gsSize}
          showCoords={showCoords}
        />
      ) : (
        <GS
          key={uuid()}
          column={column}
          row={row}
          index={i}
          gsSize={gsSize}
          selectedColor={gi.selectedColor}
          showCoords={showCoords}
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
