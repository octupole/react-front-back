
import { v4 as uuid4} from 'uuid';
import Card from './shared/Card';
import Button from './shared/Button'
import RatingSelect from './RatingSelect';
import { useState, useContext, useEffect} from 'react'
import FeedbackContext from '../context/FeedbackContext';

const FeedbackForm = () => {
  const [text,setText]=useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] =useState('')
  const [rating, setRating] = useState(10)

  const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

  const handleTextChange = (e) => {
    e.preventDefault();
    const value = e.target.value;

    if (value === "") {
      setBtnDisabled(true);
      setMessage("");
    } else if (value.trim().length < 10) {
      setBtnDisabled(true);
      setMessage("More than 10 characters, please!");
    } else {
      setMessage("");
      setBtnDisabled(false);
    }
    setText(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length >= 10) {
      const myFeedback = {
        text,
        rating,
      };
      if (feedbackEdit.edit === true) {
        updateFeedback(
          feedbackEdit.item.id,myFeedback
        );
      } else {
        myFeedback.id = uuid4();
        addFeedback(myFeedback);
        setText("");
      }
    }
  };

  useEffect( () => {

    if(feedbackEdit.edit === true){
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }
  ,[feedbackEdit]);

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate</h2>
        <RatingSelect select={setRating} selected={rating}/>
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            onChange={handleTextChange}
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled} >Send</Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  );
};
//   const [text, setText] = useState('')
//   const [rating, setRating] = useState(10)
//   const [btnDisabled, setBtnDisabled] = useState(true)
//   const [message, setMessage] = useState('')

//   const { addFeedback, feedbackEdit, updateFeedback } =
//     useContext(FeedbackContext)

//   useEffect(() => {
//     if (feedbackEdit.edit === true) {
//       setBtnDisabled(false)
//       setText(feedbackEdit.item.text)
//       setRating(feedbackEdit.item.rating)
//     }
//   }, [feedbackEdit])

//   // NOTE: This should be checking input value not state as state won't be the updated value until the next render of the component

//   // prettier-ignore
//   const handleTextChange = ({ target: { value } }) => { // 👈  get the value
//     if (value === '') {
//       setBtnDisabled(true)
//       setMessage(null)
      
//   // prettier-ignore
//     } else if (value.trim().length < 10) { // 👈 check for less than 10
//       setMessage('Text must be at least 10 characters')
//       setBtnDisabled(true)
//     } else {
//       setMessage(null)
//       setBtnDisabled(false)
//     }
//     setText(value)
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     if (text.trim().length > 10) {
//       const newFeedback = {
//         text,
//         rating,
//       }

//       if (feedbackEdit.edit === true) {
//         updateFeedback(feedbackEdit.item.id, newFeedback)
//       } else {
//         addFeedback(newFeedback)
//       }

//       // NOTE: reset to default state after submission
//       setBtnDisabled(true) // 👈  add this line to reset disabled
//       setRating(10) //👈 add this line to set rating back to 10
//       setText('')
//     }
//   }

//   // NOTE: pass selected to RatingSelect so we don't need local duplicate state
//   return (
//     <Card>
//       <form onSubmit={handleSubmit}>
//         <h2>How would you rate your service with us?</h2>
//         <RatingSelect select={setRating} selected={rating} />
//         <div className='input-group'>
//           <input
//             onChange={handleTextChange}
//             type='text'
//             placeholder='Write a review'
//             value={text}
//           />
//           <Button type='submit' isDisabled={btnDisabled}>
//             Send
//           </Button>
//         </div>

//         {message && <div className='message'>{message}</div>}
//       </form>
//     </Card>
//   )
// }

export default FeedbackForm
