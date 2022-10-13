import React, { useState } from "react";

const Question = (props) => {
  const [isCorrect, setCorrect] = useState(false);
  const [isWrong, setWrong] = useState(false);
  const [isClick, setClick] = useState(false);
  const [isShow, setShow] = useState(false);

  const { question, options, correctAnswer } = props.question;

  const clickHandler = (selectAnswer) => {
    // console.log(selectAnswer);
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

    setClick(true);
  };

  const showCorrectAnswer = (correctAnswer) => {
    setShow(true);
  };

  return (
    <div className="my-5 border p-3 rounded">
      <div className="d-flex justify-content-between">
        <h5>{question.slice(3, -4)}</h5>
        <button
          type="button"
          className={`btn btn-primary ${isClick ? "" : "disabled"}`}
          onClick={() => showCorrectAnswer(correctAnswer)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-eye"
            viewBox="0 0 16 16"
          >
            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
          </svg>
        </button>
      </div>
      <div>
        {options.map((option) => (
          <button
            type="button"
            className={`btn btn-light mt-2 btn-block w-100 ${isClick ? "disabled" : ""}`}
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
      <div className={`alert alert-primary mt-3 ${isShow ? "d-block" : "d-none"}`} role="alert">
        {isShow ? `Correct Answer: ${correctAnswer}` : ""}
      </div>
    </div>
  );
};

export default Question;
