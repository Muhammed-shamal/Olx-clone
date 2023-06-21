import { React, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import { Avatar } from "@mui/material";
import { FirebaseContext } from "../store/Context";
import { BiCalendar } from "react-icons/bi";
import { RxPerson } from "react-icons/rx";
import "./editProfile.css";
import noPublicAPi from "../../src/no-publications.webp";
import { AiFillGoogleCircle, AiFillMail, AiOutlineEdit } from "react-icons/ai";
import Banner2 from "../Components/Banner/Banner2";
export default function EditProfile() {
  const { firebase } = useContext(FirebaseContext);
  const [userDetails, setUserDetails] = useState("");
  const history = useHistory();

  useEffect(() => {
    firebase
      .firestore()
      .collection("user")
      .get("")
      .then((res) => {
        res.forEach((doc) => {
          setUserDetails(doc.data());
        });
      });
  });
  return (
    <div style={{ overflow: "hidden" }}>
      <Header />
      <Banner2 />
      <Container>
        <Row>
          <Col>
            <div
              style={{
                padding: "0 16px",
                paddingTop: "2em",
                marginBottom: "2em",
              }}
            >
              <div
                style={{
                  marginTop: "2em",
                  marginBottom: "1em",
                  textAlign: "center",
                }}
              >
                <Avatar sx={{ bgcolor: "orange" }}></Avatar>
              </div>

              <div>
                <h4>{userDetails.userName}</h4>
                <div>
                  <span className="mr-2">
                    <BiCalendar />
                  </span>
                  <span className="mr-2">Member since </span>

                  <div>
                    <span>
                      <RxPerson />{" "}
                      <span>
                        <small className="mr-1">
                          {" "}
                          <strong>0</strong> Followers
                        </small>

                        <small className="ml-2">
                          {" "}
                          <strong>0</strong> Following
                        </small>
                      </span>
                    </span>

                    <div className="mt-2">
                      <small>
                        <strong>user verified with</strong>
                      </small>

                      <div className="icons">
                        <small className="mr-2">
                          <AiFillGoogleCircle />
                        </small>

                        <small>
                          <AiFillMail />
                        </small>
                      </div>
                    </div>

                    <div>
                      <button
                        className="btn btn-outline-dark mt-3 "
                        onClick={() => history.push("/user-profile")}
                      >
                        <span>
                          <AiOutlineEdit className="mr-2" />
                        </span>
                        Edit Profile
                      </button>

                      <h6
                        style={{
                          textDecoration: "underline",
                          marginTop: "1em",
                          cursor: "pointer",
                        }}
                      >
                        <strong>Share Profile</strong>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col className="mt-1 text-center">
            <div>
              <div className="image" style={{ maxWidth: "35%" }}>
                <picture>
                  <img src={noPublicAPi} alt="" />
                </picture>
              </div>
            </div>
            <div className="mt-4 mb-4" style={{ maxWidth: "50%" }}>
              <strong>You haven't listed anything yet</strong>
              <div>
                <span className="text-muted">
                  Let go of what you don't use anymore
                </span>

                <div className="mt-3">
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => history.push("/category")}
                  >
                    Start Selling
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
