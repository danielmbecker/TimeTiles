import React, { useState, useCallback, useEffect, useRef } from "react";

// A simple overlap detection function assuming all elements are the same size and square.
const doElementsOverlap = (a, b, size) => {
  return Math.abs(a.x - b.x) < size.width && Math.abs(a.y - b.y) < size.height;
};

// A global registry of draggable element positions.
// WARNING: In a real-world app, this should be managed in a more robust way, such as using React context or a state management library.
const elementPositions = new Map();

const CollisionDraggable = ({ id, size }) => {
  const [dragging, setDragging] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const relPos = useRef({ x: 0, y: 0 });

  const onMouseDown = useCallback(
    (e) => {
      if (e.button !== 0) return; // Only respond to left-clicks.
      setDragging(true);
      relPos.current = {
        x: e.pageX - pos.x,
        y: e.pageY - pos.y,
      };
      e.stopPropagation();
      e.preventDefault();
    },
    [pos]
  );

  const onMouseUp = useCallback(() => {
    setDragging(false);
  }, []);

  const onMouseMove = useCallback(
    (e) => {
      if (!dragging) return;
      const newPos = {
        x: e.pageX - relPos.current.x,
        y: e.pageY - relPos.current.y,
      };

      // Prevent overlap
      for (let [otherId, otherPos] of elementPositions) {
        if (otherId !== id && doElementsOverlap(newPos, otherPos, size)) {
          return; // If overlap detected, prevent the move
        }
      }

      setPos(newPos);
      elementPositions.set(id, newPos);
      e.stopPropagation();
      e.preventDefault();
    },
    [dragging, id, size]
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

  // Update the global registry on mount/unmount
  useEffect(() => {
    elementPositions.set(id, pos);
    return () => {
      elementPositions.delete(id);
    };
  }, [id, pos]);

  const styles = {
    cursor: dragging ? "grabbing" : "grab",
    transform: `translate(${pos.x}px, ${pos.y}px)`,
    position: "absolute",
    width: size.width, // Define width
    height: size.height, // Define height
    userSelect: "none",
    background: "tomato",
    borderRadius: "10px",
  };

  return (
    <div style={styles} onMouseDown={onMouseDown}>
      Drag me
    </div>
  );
};

export default CollisionDraggable;

// Usage of Draggable component
