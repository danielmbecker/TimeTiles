import React from "react";

const AddTileButton = ({ onClick }) => {
  return (
    <div onClick={onClick} className="add-tile-button">
      <p>+</p>
    </div>
  );
};

export default AddTileButton;
