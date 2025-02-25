import React, {useState} from 'react';
import 'materialize-css/dist/css/materialize.min.css';

const QuizPage = () => {

    const [currentQuestion, setCurrentQuestion] = useState('Can you explain what JavaScript is and how it is used to add interactivity to websites?');
    const [questionTotal, setQuestionTotal] = useState(5);
    const [currentQuestionTotal, setCurrentQuestionTotal] = useState(1);


    return (
        <div className="container">
            <div className="card" style={{boxShadow: 'none'}}>
                <div className="card-content ">
                    <h1 className="card-title teal-text center-align">{currentQuestionTotal} of {questionTotal}</h1>
                    <h4 className="teal-text">Questions</h4>
                    <p>{currentQuestion}</p>
                    <h4 className="teal-text">Your Answer</h4>
                    <div className="input-field">
                        <input type="text" id="answer" placeholder="Write your answer here" />
                    </div>
                    <button className="btn waves-effect waves-light" type="submit" name="action">
                        SUBMIT ANSWER
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuizPage;