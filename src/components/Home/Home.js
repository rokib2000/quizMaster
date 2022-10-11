import React from "react";
import { Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import QuizCard from "../QuizCard/QuizCard";

const Home = () => {
  const quizs = useLoaderData();
  //   console.log(quizs.data);

  return (
    <>
      <Container>
        <Banner></Banner>
        <div className="my-5">
          <Row xs={1} md={4} className="g-4">
            {quizs.data.map((quiz) => (
              <QuizCard key={quiz.id} quiz={quiz}></QuizCard>
            ))}
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Home;
