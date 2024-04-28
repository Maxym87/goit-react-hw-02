import { useState } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedbaсk from "../Feedback/Feedback";

export default function App() {

  const [clicks, setClicks] = useState({good: 0,
	neutral: 0,
	bad: 0})
  
  const updateFeedback = feedbackType => {
setClicks({...clicks, [feedbackType] : clicks[feedbackType] + 1})
}
 console.log(clicks)

    return (
      <>
        <Description />
        <Options onClick={updateFeedback} />
        <Feedbaсk value={ clicks} />
      </>

    )
  }