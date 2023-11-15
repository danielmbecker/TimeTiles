import * as React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Tile } from "./Tile";
import AddTileField from "./AddTileField";

export const TileArea = ({ tiles }) => {
  const constraintsRef = useRef();

  return (
    <>
      <motion.div className="drag-area" ref={constraintsRef}>
        {/* <AddTileField /> */}

        {tiles.map((item) => (
          <Tile
            walls={constraintsRef}
            id={item.id}
            title={item.title}
            time={item.time}
            color={item.color}
            posX={item.posX}
            posY={item.posY}
          />
        ))}
      </motion.div>
    </>
  );
};
