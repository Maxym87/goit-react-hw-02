import { useState, useEffect } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";



export default function App() {

  const [values, setValues] = useState(() => {
    const savedFeedback = JSON.parse(localStorage.getItem('feedback'))

    if (savedFeedback !== null) {
      return savedFeedback
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0
    }

  }
  );
  
  const updateFeedback = feedbackType => {
setValues({...values, [feedbackType] : values[feedbackType] + 1})
  }
  
  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(values))
  }, [values])
  
  const { good, neutral, bad } = values;
  const totalFeedback = bad + good + neutral;
  const positiveFeedback = Math.round((good / totalFeedback) * 100) 

  const resetFeedback = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad:0
    })
  }

    return (
      <>
        <Description/>
        <Options feedback={updateFeedback} totalFeedback={totalFeedback} reset={resetFeedback}/>
 <>{totalFeedback === 0 ? <Notification message={"No feedback yet"} /> : <Feedback values={values} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback } />}</>
      </>

    )
  }