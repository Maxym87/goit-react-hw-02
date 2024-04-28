import { useState } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedbak from "../Feedback/Feedback";

export default function App() {

  const [clicks, setClicks] = useState(0)
  
  const updateFeedback = feedbackType => {
setClicks({...clicks, [feedbackType] : clicks[feedbackType] + 1})
}


    return (
      <>
        <Description />
        <Options onClick={updateFeedback} />
        <Feedbak value={clicks} />
      </>

    )
  }

