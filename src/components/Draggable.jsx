import React, { useState, useCallback, useEffect } from "react";

const Draggable = () => {
  const [dragging, setDragging] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [relPos, setRelPos] = useState(null);

  const onMouseDown = useCallback(
    (e) => {
      if (e.button !== 0) return; // Ignore right-clicks and other mouse buttons.
      setDragging(true);
      setRelPos({
        x: e.pageX - pos.x,
        y: e.pageY - pos.y,
      });
      e.stopPropagation();
      e.preventDefault();
    },
    [pos.x, pos.y]
  );

  const onMouseUp = useCallback(() => {
    setDragging(false);
    setRelPos(null);
  }, []);

  const onMouseMove = useCallback(
    (e) => {
      if (!dragging) return;
      setPos({
        x: e.pageX - relPos.x,
        y: e.pageY - relPos.y,
      });
      e.stopPropagation();
      e.preventDefault();
    },
    [dragging, relPos]
  );

  useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
    } else {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [dragging, onMouseMove, onMouseUp]);

  const styles = {
    cursor: dragging ? "grabbing" : "grab",
    transform: `translate(${pos.x}px, ${pos.y}px)`,
    position: "absolute", // Ensure element positioning is relative to the nearest positioned ancestor
    userSelect: "none", // Prevent text selection
    background: "gold",
    borderRadius: "10px",
    height: "100px",
    width: "100px",
  };

  return (
    <div style={styles} onMouseDown={onMouseDown}>
      Drag me
    </div>
  );
};

export default Draggable;
