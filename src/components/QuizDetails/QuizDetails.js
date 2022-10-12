import React from "react";
import { Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const QuizDetails = () => {
  const quizDetails = useLoaderData();
  // console.log(quizDetails);

  const { name, questions } = quizDetails.data;
  return (
    <div>
      <Container>
        <h2 className="text-center my-4">
          Quiz for <span>{name}</span>
        </h2>
        {questions.map((question) => (
          <Question question={question} key={question.id}></Question>
        ))}
      </Container>
    </div>
  );
};

export default QuizDetails;
