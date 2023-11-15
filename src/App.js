import { v4 as uuidv4 } from "uuid";
import * as React from "react";
import { useState } from "react";
import { render } from "react-dom";
import { TileArea } from "./components/TileArea";
import { Refresh } from "./components/Refresh";
import TileData from "./data/TileData";

import "./index.css";
import AddTileField from "./components/AddTileField";
// import Login from "./components/Login";
import Messages from "./components/Messages";

const App = () => {
  const [tiles, setTiles] = useState(TileData);

  const addTile = (newTile) => {
    newTile.id = uuidv4();
    setTiles([newTile, ...tiles]);
  };

  // const [count, setCount] = useState(0);
  return (
    <>
      <Messages />
      {/* <TileArea tiles={tiles} /> */}
    </>
  );
};

// render(<App />, document.getElementById("root"));

export default App;

// import Draggable from "./components/Draggable";
// import CollisionDraggable from "./components/CollisionDraggable";

// const App = () => {
//   return (
//     <div>
//       <Draggable />
//       <Draggable />
//       <Draggable />
//       <CollisionDraggable id="element1" size={{ width: 100, height: 100 }} />
//       <CollisionDraggable id="element2" size={{ width: 100, height: 100 }} />
//       {/* More <Draggable /> elements as needed */}
//     </div>
//   );
// };

// export default App;
