import React from "react";
import { useState } from "react";
import AddTileButton from "./AddTileButton";
import AddTileForm from "./AddTileForm";
import { motion } from "framer-motion";

const AddTileField = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleAddCard = (e) => {
    console.log("click");
    setIsVisible(!isVisible);
    console.log(isVisible);
  };

  return (
    <motion.div drag className="add-tile-field">
      <AddTileButton onClick={handleAddCard} />
      {isVisible && <AddTileForm />}
    </motion.div>
  );
};

export default AddTileField;

// import { useState } from "react";
// import RatingSelect from './RatingSelect'
// import Card from './shared/Card'
// import Button from './shared/Button'

// function FeedbackForm({handleAdd}) {
//   const[text, setText] = useState('')
//   const[rating, setRating] = useState(10)
//   const[btnDisabled, setBtnDisabled] = useState(true)
//   const[message, setMessage] = useState('')

//   const handleTextChange = (e) => {
//       if(text===''){
//           setBtnDisabled(true)
//           setMessage(null)
//       }else if(text !== '' && text.trim().length <= 10 ){
//           setBtnDisabled(true)
//           setMessage('Response must be at least 10 characters')
//       }else{
//           setMessage(null)
//           setBtnDisabled(false)
//       }
//     setText(e.target.value)
//   }

//   const handleSubmit = (e) => {
//       e.preventDefault()
//       if(text.trim().length > 10){
//           const newFeedback = {
//               text,
//               rating,
//           }
//           handleAdd(newFeedback)

//           setText('')
//       }
//   }

//     return (
//   <Card>
//     <form onSubmit={handleSubmit}>
//         <h2>How would you rate your service with us?</h2>
//         <RatingSelect select={(rating) =>  setRating(rating)
//         }/>
//         <div className="input-group">
//             <input
//                 onChange={handleTextChange}
//                 type="text"
//                 placeholder="Write a review"
//                 value = {text}
//             />
//             <Button type='submit' isDisabled={btnDisabled}>
//                 Send
//             </Button>
//         </div>

//         {message && <div className='message'>{message}</div>}

//     </form>

//   </Card>
//   )}

// export default FeedbackForm
