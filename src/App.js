import { useState } from "react";
import Header from "./components/Header";
import FeedbackLists from "./components/FeedbackLists";
import FeedbackData from "./data/FeedbackData";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <>
      <Header text="Feedback UI" bgColor="blue" textColor="pink" />
      <div className="container">
        <FeedbackLists feedback={feedback} />
      </div>
    </>
  );
}

export default App;
