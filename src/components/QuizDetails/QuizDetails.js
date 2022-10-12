import React from "react";
import { Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const QuizDetails = () => {
  const quizDetails = useLoaderData();
  console.log(quizDetails);

  const { logo, name, id } = quizDetails.data;
  return (
    <div>
      <Container>
        <h2 className="text-center my-3">
          Quiz for <span>{name}</span>
        </h2>
      </Container>
    </div>
  );
};

export default QuizDetails;
