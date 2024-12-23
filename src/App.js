import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";

function App() {
  return (
    <>
      <Header text="Feedback UI" bgColor="red" textColor="blue" />
      <div className="container">
        <FeedbackItem />
      </div>
    </>
  );
}

export default App;
