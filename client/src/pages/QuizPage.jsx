import React, { useState } from "react";

import { useLocation } from "react-router-dom";

import "materialize-css/dist/css/materialize.min.css";

const QuizPage = () => {
  //   const [currentQuestion, setCurrentQuestion] = useState(
  //     "Can you explain what JavaScript is and how it is used to add interactivity to websites?"
  //   );
  const [questionTotal, setQuestionTotal] = useState(5);
  const [currentQuestionTotal, setCurrentQuestionTotal] = useState(1);

  const location = useLocation();
  const questions = location.state?.questions || [];
  console.log("Question:", questions);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const currentQuestion =
    questions[currentQuestionIndex] || "No questions available.";

  function handleNext() {
    // Increase index by 1
    setCurrentQuestionIndex((prev) =>
      prev < questions.length - 1 ? prev + 1 : prev
    );
  }

  return (
    <div className="container">
      <div className="card">
        <div className="card-content ">
          <h1 className="card-title teal-text center-align">
            {currentQuestionTotal} of {questionTotal}
          </h1>
          <h4 className="teal-text">Questions</h4>
          <p>{currentQuestion.question}</p>
          <h4 className="teal-text">Your Answer</h4>
          <div className="input-field">
            <input
              type="text"
              id="answer"
              placeholder="Write your answer here"
            />
          </div>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
            onClick={handleNext}
          >
            SUBMIT ANSWER
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
