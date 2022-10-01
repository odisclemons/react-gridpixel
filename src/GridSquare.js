import uuid from "react-uuid";

const GridSquare = ({ column, row, index, selectedColor }) => {
  let currentColor = "red";
  let gridId = `${column}-${row}`;
  let showCoords = true;

  let gsSize = 1;
  let selected = false;
  if (!selectedColor) selectedColor = currentColor;
  let inactiveColor = "white";
  //   let rgbColor = "";
  //   let borderColor = "gold";
  //this.gridSquare = $(`<div id="${this.gridId}" class="grid"><span>${showCoords ? `${this.gridId}` : '&nbsp;'}</span></div>`)
  let gsStyle = {
    backgroundColor: selectedColor ?? inactiveColor,
    height: `${gsSize}rem`,
    width: `${gsSize}rem`,
  };
  //   this.gridSquare.on("click", this.toggle);
  //   this.gridSquare.on("mouseover", this.handleMouseOver);

  return (
    <div id={gridId} className="gs" style={gsStyle} key={uuid()}>
      <span>${showCoords ? `${gridId}` : "&nbsp;"}</span>
    </div>
  );
};

export default GridSquare;
