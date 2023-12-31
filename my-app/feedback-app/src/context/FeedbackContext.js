import { createContext, useEffect, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading,setIsLoading]=useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });
  useEffect(() => {
    fetchFeedback();
    
  }, []);
  
  const fetchFeedback = async () =>{
    const response = await fetch(`/feedback?_sort=id`)
    const data =await response.json();
    setFeedback(data);
    setIsLoading(false);
  }
  const deleteFeedback = async (id) => {
    if (window.confirm("Are you sure?")) {
      const res = await fetch(`/feedback/${id}`,{
        method: 'DELETE',
        headers: {
          'Content-Type':'application/json'
        }
      });
      setFeedback(feedback.filter((p) => p.id !== id));
    }
  };

  const addFeedback = async (newFeedback) => {
    const res = await fetch(`/feedback`,
    {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": "token-value",
      },
      body: JSON.stringify(newFeedback),
    });
    const data= await res.json()
    setFeedback([data, ...feedback]);
  };

  const editFeedback = (item) => {
    const newItem = {
      item,
      edit: true,
    };
    setFeedbackEdit(newItem);
  };
  const updateFeedback = (id, updte) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updte } : item))
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

// export const FeedbackProvider = ({ children }) => {
//   const [isLoading, setIsLoading] = useState(true)
//   const [feedback, setFeedback] = useState([])
//   const [feedbackEdit, setFeedbackEdit] = useState({
//     item: {},
//     edit: false,
//   })

//   useEffect(() => {
//     fetchFeedback()
//   }, [])

//   // Fetch feedback
//   const fetchFeedback = async () => {
//     const response = await fetch(`/feedback?_sort=id&_order=desc`)
//     const data = await response.json()

//     setFeedback(data)
//     setIsLoading(false)
//   }

//   // Add feedback
//   const addFeedback = async (newFeedback) => {
//     const response = await fetch('/feedback', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newFeedback),
//     })

//     const data = await response.json()

//     setFeedback([data, ...feedback])
//   }

//   // Delete feedback
//   const deleteFeedback = async (id) => {
//     if (window.confirm('Are you sure you want to delete?')) {
//       await fetch(`/feedback/${id}`, { method: 'DELETE' })

//       setFeedback(feedback.filter((item) => item.id !== id))
//     }
//   }

//   // Update feedback item
//   const updateFeedback = async (id, updItem) => {
//     const response = await fetch(`/feedback/${id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(updItem),
//     })

//     const data = await response.json()

//     // NOTE: no need to spread data and item
//     setFeedback(feedback.map((item) => (item.id === id ? data : item)))

//     // FIX: this fixes being able to add a feedback after editing
//     // credit to Jose https://www.udemy.com/course/react-front-to-back-2022/learn/lecture/29768200#questions/16462688
//     setFeedbackEdit({
//       item: {},
//       edit: false,
//     })
//   }

//   // Set item to be updated
//   const editFeedback = (item) => {
//     setFeedbackEdit({
//       item,
//       edit: true,
//     })
//   }

//   return (
//     <FeedbackContext.Provider
//       value={{
//         feedback,
//         feedbackEdit,
//         isLoading,
//         deleteFeedback,
//         addFeedback,
//         editFeedback,
//         updateFeedback,
//       }}
//     >
//       {children}
//     </FeedbackContext.Provider>
//   )
// }

// export default FeedbackContext
