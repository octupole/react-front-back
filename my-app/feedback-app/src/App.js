import React from "react";
import { useState } from "react";
import Header from "./components/Header";

import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

const App = () => {
    const [feedback,setFeedback] = useState(FeedbackData);
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure?')){
            setFeedback(feedback.filter( (p) => p.id !== id))
        }
        console.log(feedback)
    };
    const addFeedback = (newFeedback) => {

      setFeedback([newFeedback,...feedback]);
      console.log('App',newFeedback);
    }
  return (
    <>
      <Header />
      <div className="container">
      <FeedbackForm addFeedback={addFeedback}/>
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
      </div>
    </>
  );
};

export default App;
