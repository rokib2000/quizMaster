import React, { useState } from "react";

const Question = (props) => {
  const [isCorrect, setCorrect] = useState(false);
  const [isWrong, setWrong] = useState(false);
  const { question, options, correctAnswer } = props.question;

  const clickHandler = (selectAnswer) => {
    console.log(selectAnswer);
    console.log(correctAnswer);
    const isCorrectAnswer = selectAnswer === correctAnswer;
    const isWrongAnswer = selectAnswer !== correctAnswer;
    if (isCorrectAnswer) {
      setCorrect(true);
    } else {
      setCorrect(false);
    }
    if (isWrongAnswer) {
      setWrong(true);
    } else {
      setWrong(false);
    }
  };

  return (
    <div className="my-5 border p-3 rounded">
      <div>
        <h5>{question.slice(3, -4)}</h5>
      </div>
      <div>
        {options.map((option) => (
          <button
            type="button"
            // style={{ background: btn }}
            className="btn btn-light mt-2 btn-block w-100"
            onClick={() => clickHandler(option)}
            key={option}
          >
            {option}
          </button>
        ))}
      </div>
      <div className={`alert alert-success mt-3 ${isCorrect ? "d-block" : "d-none"}`} role="alert">
        Correct Answer!
      </div>
      <div className={`alert alert-danger mt-3 ${isWrong ? "d-block" : "d-none"}`} role="alert">
        Wrong Answer!
      </div>
    </div>
  );
};

export default Question;
