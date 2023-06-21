import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import emptyChat from "../emptyChat.webp";
import "./chat.css";
import Header from "../Components/Header/Header";

export default function Chat() {
  return (
    <>
      <Header />
      <div className="oops">
        <Container className="d-flex justify-content-center">
          <Row>
            <Col>
              <main className="text-center" style={{ marginTop: "10em" }}>
                <div className="error-code">
                  <h6>No messages, yet?</h6>
                  <div className="errorImg">
                    <picture>
                      <img src={emptyChat} alt="error-img" />
                    </picture>
                  </div>

                  <div className="m-3 mb-2">
                    <h6 >
                      We’ll keep messages for any item you’re selling in here
                    </h6>
                  </div>
                </div>
              </main>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
