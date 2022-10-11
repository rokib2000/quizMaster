import React from "react";
import { Col, Row } from "react-bootstrap";
import header2 from "../../image/header2.jpg";

const Banner = () => {
  return (
    <Row className="d-flex align-items-center">
      <Col sm={6}>
        <h1 className="my-3">Easy and intuitive online testing.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident optio dolorum possimus explicabo minima
          cupiditate, suscipit nostrum eveniet quae sunt quasi officia debitis ea earum dolore itaque ducimus fugit non.
          Excepturi tenetur sit ea quis doloribus fuga aut nesciunt culpa quasi, dicta corporis rerum voluptatum porro
          natus facilis sapiente perspiciatis?
        </p>
      </Col>
      <Col sm={6}>
        <img className="img-fluid" src={header2} alt="" />
      </Col>
    </Row>
  );
};

export default Banner;
