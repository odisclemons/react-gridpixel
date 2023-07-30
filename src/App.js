import { useEffect, useState } from "react";
import GridContainer from "./GridContainer";

function App() {
  return (
    <main>
      <GridContainer
        showCoords={true}
        gridItems={[]}
        currentColor={""}
        inactiveColor={"white"}
        mouseDown={null}
        gsSize={3}
        lockedColors={[]}
        gridDimensions={{ x: 10, y: 10 }}
        plantData={[]}
        gcStyle={{}}
      ></GridContainer>
    </main>
  );
}

export default App;
