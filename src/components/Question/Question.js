import React, { useState } from "react";

const Question = (props) => {
  //   console.log(props.question);
  //   const [btn, setBtn] = useState();
  //   const [btn, setBtn] = useState();
  const { question, options, correctAnswer, id } = props.question;
  let btn = "";
  const clickHandler = (selectAnswer) => {
    console.log(selectAnswer);
    const isCorrectAnswer = selectAnswer === correctAnswer;
    const isWrongAnswer = selectAnswer !== correctAnswer;
    btn = isCorrectAnswer ? "block" : "none";
    // const wrongAnswerClass = isWrongAnswer ? "wrong-answer" : "";
    // const disabledClass = currentAnswer ? "disabled-answer" : "";
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
      <div className="alert alert-success d-none" style={{ display: btn }} role="alert">
        A simple success alert—check it out!
      </div>
    </div>
  );
};

export default Question;
