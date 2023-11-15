import * as React from "react";
import { useState } from "react";

import { motion } from "framer-motion";

export const Tile = ({ walls, title, time, color, posX, posY }) => {
  const [position, setPosition] = useState({
    x: posX,
    y: posY,
  });

  const handleDragEnd = (event, info) => {
    // setPosition({
    //   x:
    //     position.x + info.offset.x < 0
    //       ? 0
    //       : Math.round(position.x + info.offset.x),
    //   y:
    //     position.y + info.offset.y < 0
    //       ? 0
    //       : Math.round(position.y + info.offset.y),
    // });
  };

  console.log(walls.current);

  return (
    <>
      <motion.div
        drag
        dragConstraints={walls}
        // dragMomentum={false}
        // onDragEnd={handleDragEnd}
        className="tile"
        onDragTransitionEnd={handleDragEnd}
        style={{
          width: 100 + 50 * time,
          height: 100 + 50 * time,
          background: `${color}`,
          x: position.x,
          y: position.y,
        }}
      >
        <h2>{title}</h2>
        {/* <p>{time}</p> */}
        <p>{`x: ${position.x}`}</p>
        <p>{`y: ${position.y}`}</p>
      </motion.div>
    </>
  );
};
