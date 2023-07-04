import FeedbackItem from './FeedbackItem'

// NOTE: added layout prop for nicer animation
// https://www.framer.com/docs/animation/#layout-animations

function FeedbackList({feedback, handleDelete}) {

  if(!feedback || feedback.length === 0) {
    return(
    <>
    <p>No feedback yet</p>
    </>
    )
  }
  
  return (
    <div className='feedback-list'>
       {feedback.map((item) => (
         <FeedbackItem item={item} handleDelete={handleDelete}/>
       ))}
  </div>
  )

  // return (
  //   </div>
  // )
}

export default FeedbackList
