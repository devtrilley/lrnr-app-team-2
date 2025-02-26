import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";

const QuizPage = () => {
  const [currentQuestionTotal, setCurrentQuestionTotal] = useState(1);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const navigate = useNavigate(); //For navigation to /result
  const questions = location.state?.questions || [];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const currentQuestion = questions[currentQuestionIndex] || "No questions available.";

  const handleAnswerChange = (event) => {
    setUserAnswer(event.target.value);
  };

  //Submit answer and fetch evaluation
  const handleSubmitAnswer = async () => {
    if (!userAnswer.trim()) {
      setFeedback({
        evaluation: "⚠️ Please enter an answer before submitting.",
      });
      setShowFeedback(true);
      return;
    }

    try {
      setLoading(true);
      const response = await fetch("https://lrnr-app-team-2.onrender.com/api/claude/check-answer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: currentQuestion,
          userAnswer: userAnswer,
        }),
      });

      const data = await response.json();
      console.log("Backend response:", data); 
      setFeedback({
        evaluation: data.evaluation || "No evaluation provided.",
        explanation: data.explanation || "No explanation provided.",
        correctAnswer: data.correctAnswer || "",
      });
      setShowFeedback(true);
    } catch (error) {
      console.error("Error checking answer:", error);
      setFeedback({
        evaluation: "⚡ Error occurred while checking the answer.",
      });
      setShowFeedback(true);
    } finally {
      setLoading(false);
    }
  };

  //Handle "Next Question" or "See Results"
  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      // Go to the next question
      setShowFeedback(false);
      setUserAnswer("");
      setFeedback(null);
      setCurrentQuestionIndex((prev) => prev + 1);
      setCurrentQuestionTotal((prev) => prev + 1);
    } else {
      //Navigate to /result after the last question
      navigate("/result");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-content">
          <h1 className="card-title teal-text center-align">
            {currentQuestionTotal} of {questions.length}
          </h1>
          <h4 className="teal-text">Question</h4>
          <p>{currentQuestion}</p>
          <h4 className="teal-text">Your Answer</h4>
          <div className="input-field">
            <input
              type="text"
              id="answer"
              placeholder="Write your answer here"
              value={userAnswer}
              onChange={handleAnswerChange}
              disabled={loading}
            />
          </div>
          <button
            className={`btn waves-effect waves-light teal ${loading ? "disabled" : ""}`}
            type="submit"
            onClick={handleSubmitAnswer}
          >
            {loading ? "Checking..." : "SUBMIT ANSWER"}
          </button>

          {showFeedback && feedback && (
            <div className="feedback-section" style={{ marginTop: "20px" }}>
              <h5><strong>Evaluation:</strong> {feedback.evaluation}</h5>
              <p><strong>Explanation:</strong> {feedback.explanation}</p>
              {feedback.correctAnswer && (
                <p><strong>Correct Answer:</strong> {feedback.correctAnswer}</p>
              )}
              {/*Show "NEXT QUESTION" or "SEE RESULTS" based on progress */}
              {currentQuestionIndex <= questions.length - 1 && (
                <button
                  className="btn waves-effect waves-light teal"
                  style={{ marginTop: "10px" }}
                  onClick={handleNext}
                >
                  {currentQuestionIndex < questions.length - 1
                    ? "NEXT QUESTION"
                    : "SEE RESULTS"}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
