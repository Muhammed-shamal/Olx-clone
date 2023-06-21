import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Banner from "../Components/Banner/Banner";
import Header from "../Components/Header/Header";
import "./pagenotfound.css";
import errorImg from "../404 error olx.webp";

export default function NotFound() {
  return (
    <div className="oops">
      <Container>
        <Row>
          <Col>
            <main>
              <div className="error-code">
                <div className="errorImg">
                  <picture>
                    <img src={errorImg} alt="error-img" />
                  </picture>
                </div>

                <h1>Oops!</h1>

                <div>
                  <h5>
                    We can't seem to find that.
                    <br />
                    Try searching for it.
                  </h5>
                </div>
                <small className="text-muted">Error 404</small>

                <div>
                  <h6>
                    Here are some helpful links: <a href="/">Home</a>
                    <a href="#help">Help</a>
                  </h6>
                </div>
              </div>
            </main>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
