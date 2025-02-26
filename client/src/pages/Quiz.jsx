import QuizOptions from "../components/QuizOptions";
import M from "materialize-css";

export default function Quiz() {

  return (
    <div className="quiz-container">
      <div className="title-div">
      <h1>Quiz Generation Options</h1>
      <p>Please choose your preferences below to generate your personalized quiz</p>
      </div>
      <QuizOptions />
    </div>
  );
}
