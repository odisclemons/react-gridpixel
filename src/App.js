import { useEffect, useState } from "react";
import GridContainer from "./GridContainer";

function App() {
  return (
    <main style={{ background: "#333" }}>
      <GridContainer
        showCoords={true}
        gridItems={[]}
        currentColor={"green"}
        inactiveColor={"white"}
        mouseDown={null}
        gsSize={15}
        lockedColors={[]}
        gridDimensions={{ x: 8, y: 4 }}
        plantData={[]}
        gcStyle={{}}
      ></GridContainer>
    </main>
  );
}

export default App;
