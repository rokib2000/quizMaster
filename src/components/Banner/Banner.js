import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import header2 from "../../image/header2.jpg";

const Banner = () => {
  return (
    <Row className="d-flex align-items-center">
      <Col sm={6}>
        <h1 className="my-3">Easy and Intuitive Online Testing.</h1>
        <p>Welcome to simple and easy quiz game app.</p>
        <Link to="statistics">
          <button type="button" class="btn btn-primary  btn-block">
            See Statistics
          </button>
        </Link>
      </Col>
      <Col sm={6}>
        <img className="img-fluid" src={header2} alt="" />
      </Col>
    </Row>
  );
};

export default Banner;
