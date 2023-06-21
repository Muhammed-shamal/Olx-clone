import React, { useContext, useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  Modal,
  Button,
} from "react-bootstrap";
import "./userProfile.css";
import { FirebaseContext } from "../store/Context";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Banner2 from "../Components/Banner/Banner2";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import OlxLogo from "../assets/OlxLogo";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Avatar } from "@mui/material";

export default function UserProfile() {
  const { firebase } = useContext(FirebaseContext);
  const [show, setShow] = useState(false);
  const [number, setNumber] = useState("");
  const [userDetails, setUserDetails] = useState("");
  const history = useHistory();

  firebase
    .firestore()
    .collection("user")
    .get()
    .then((res) => {
      res.forEach((doc) => {
        setUserDetails(doc.data());
      });
    });

  return (
    <div>
      <Header />
      <Banner2 />
      <Container className="py-5">
        <Row style={{ marginTop: "2em", marginBottom: "3em" }}>
          <Col>
            <h4>Edit Profile</h4>
            <span className="text-muted">Profile Picture</span>

            <button
              className="btn btn-outline-dark"
              onClick={() => history.push("/edit-profile")}
            >
              View Profile
            </button>
          </Col>

          <Col className="" md="9">
            <div className="display">
              <h4>Edit Profile</h4>
              <hr />
              <h6>Basic Information</h6>

              <div className="formData">
                <Form.Group className="mb-3 mt-2">
                  <Form.Control
                    size="lg"
                    className="w-50"
                    value={userDetails.userName}
                  />
                  <small className="text-muted d-flex justify-content-end w-50">
                    0 / 20
                  </small>
                </Form.Group>

                <Form.Group className="mb-3 mt-2">
                  <textarea
                    className="w-50"
                    autoComplete="off"
                    placeholder="About me (Optional)"
                    maxLength={"200"}
                    spellCheck="false"
                    style={{ height: "74px" }}
                  ></textarea>
                  <small className="text-muted d-flex justify-content-end w-50">
                    0 / 20
                  </small>
                </Form.Group>
                <hr />

                <Form.Group className="mb-3 mt-3">
                  <h5 className="mt-2 mb-2">Contact Information</h5>
                  <InputGroup className="w-75">
                    <InputGroup.Text>+91 </InputGroup.Text>

                    <Form.Control
                      size="lg"
                      placeholder="Phone Number "
                      onClick={() => setShow(!show)}
                      value={number}
                    />
                    <small className="text-muted d-flex align-items-center ml-3">
                      {userDetails.userName
                        ? "Yay! Your number is verified."
                        : ""}
                    </small>
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-2 mt-2">
                  {" "}
                  <Form.Control size="lg" className="w-75" />
                  <small>
                    {userDetails.userName
                      ? " Your email is never shared with external parties nor do we   use it to spam you in any way."
                      : ""}
                  </small>
                </Form.Group>

                <hr />

                <div className="footerInformation">
                  <h6>Additional Information</h6>
                  <span className="mr-3">Google</span>

                  <div className="d-flex">
                    <small className="text-muted d-flex">
                      Link your Google account to seamlessly use your contact
                      list.
                    </small>

                    <button className="btn btn-outline-dark w-50 mr-5 ml-5">
                      Unlink
                    </button>
                  </div>
                </div>

                <hr />

                <div className="d-flex justify-content-between">
                  <h5 className="discard">Discard</h5>
                  <button
                    className="btn btn-dark"
                    onClick={() => history.push("/")}
                  >
                    Save Changes
                  </button>
                </div>

                <Container>
                  <Modal
                    size="md"
                    show={show}
                    onHide={() => setShow(false)}
                    className="text-center modal"
                  >
                    <Modal.Header>
                      <OlxLogo></OlxLogo>
                      <AiOutlineArrowRight className="mt-3" />
                      <Avatar sx={{ bgcolor: "orange" }}></Avatar>
                    </Modal.Header>

                    <h5 className="mt-3 mb-1">
                      Enter your phone number to get verified
                    </h5>

                    <Modal.Body>
                      <small className="text-muted mb-3">
                        We'll send you a verification code on the same number.
                      </small>

                      <InputGroup className=" mt-3 mb-2">
                        <InputGroup.Text>+91 </InputGroup.Text>
                        <Form.Control
                          size="lg"
                          placeholder="Phone Number "
                          onChange={(event) => setNumber(event.target.value)}
                        />
                      </InputGroup>

                      <div className="d-flex justify-content-center mt-4 mb-5">
                        <small className="text-muted">
                          Your contact number is never shared with external
                          parties nor do we use it to spam you in any way.
                        </small>
                      </div>

                      <div>
                        <Button
                          onClick={
                            number.length === 10 && !isNaN(number)
                              ? () => setShow(false)
                              : ""
                          }
                          disabled={
                            number.length === 10 && !isNaN(number)
                              ? false
                              : true
                          }
                        >
                          Next
                        </Button>
                      </div>
                    </Modal.Body>
                  </Modal>
                </Container>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
