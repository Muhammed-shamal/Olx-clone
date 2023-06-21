import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import commingSoon from "../../store/Types/Blue Simple Coming Soon Instagram Post .png";
import Header from "../Header/Header";

export default function CommingSoon() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <Container className="py-5">
        <Row className="mt-4 d-flex justify-content-center">
          <Col xl="10">
            <img className="w-100" src={commingSoon} alt="img" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
