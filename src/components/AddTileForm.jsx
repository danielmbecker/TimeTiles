import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

// import RatingSelect from './RatingSelect'
// import Card from './shared/Card'
// import Button from './shared/Button'

// const AddTileForm = () => {
//   return (
//     <div className="add-tile-form">
//       <input></input>
//     </div>
//   );
// };

// export default AddTileForm;

const AddTileForm = ({ handleAdd }) => {
  const [text, setText] = useState("");
  const [time, setTime] = useState("1");
  //   const[rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextChange = (e) => {
    console.log("handleTextChange");
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const handleTimeChange = (e) => {
    console.log("handleTimeChange");
    setTime(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log("handleSubmit");
    console.log("text:", text);
    e.preventDefault();
    // if (text.trim().length > 3) {
    //   // const newFeedback = {
    //   //   text,
    //   //   rating,
    //   // };
    //   // handleAdd(newFeedback);

    //   // setText("");
    // }
  };

  console.log(Date());

  return (
    // <div className="add-tile-form"></div>

    <motion.div className="add-tile-form">
      <form onSubmit={handleSubmit}>
        <h2>new task:</h2>
        {/* <RatingSelect select={(rating) => setRating(rating)} /> */}
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="describe it!"
            value={text}
          />
          <input
            onChange={handleTimeChange}
            type="number"
            min="0"
            max="100"
            value={time}
          />
          <button type="submit" isDisabled={btnDisabled}>
            Send
          </button>
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </motion.div>
  );
};

export default AddTileForm;
