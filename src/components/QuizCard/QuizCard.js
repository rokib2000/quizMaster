import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const QuizCard = (props) => {
  const quiz = props.quiz;
  console.log(quiz);
  const { name, logo, total } = quiz;
  return (
    <Col>
      <Card border="warning" className="bg-light">
        <Card.Img variant="top" src={logo} />
        <Card.Body className="text-center">
          <Card.Title>{name}</Card.Title>
          <Card.Text>Total Quiz: {total}</Card.Text>
          <div className="d-grid gap-2">
            <Button variant="primary">Start Quiz</Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default QuizCard;
