import React, { useContext, useEffect, useState } from "react";
import { AuthContext, FirebaseContext } from "../../store/Context";
import { PostContext } from "../../store/PostContext";
import "./View.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import { AiOutlineCalendar, AiOutlinePhone } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function View() {
  const [userDetails, setUserDetails] = useState("");
  const { postDetails, setPostDetails } = useContext(PostContext);
  const { user } = useContext(AuthContext);
  const [product, setProducts] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  const history = useHistory();

  const { userId } = postDetails;
  useEffect(() => {
    firebase
      .firestore()
      .collection("user")
      .where("id", "==", userId)
      .get()
      .then((res) => {
        res.forEach((doc) => {
          setUserDetails(doc.data());
        });
      });

    firebase
      .firestore()
      .collection("products")
      .get()
      .then((snapshot) => {
        const allPost = snapshot.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        setProducts(allPost);
      });
  });

  return (
    <>
      <Header />

      <Container className="py-5 text-capitalize">
        <Row
          className="justify-content-center align-items-center h-100Z"
          style={{ marginTop: "5em" }}
        >
          <Col>
            <div className="viewParentDiv">
              <div className="imageShowDiv" role={"button"}>
                <img
                  className="mt-5 mb-5 ml-5"
                  src={postDetails.url}
                  alt="img"
                />
              </div>
            </div>
            <div style={{ marginTop: "8em" }}></div>

            <Row className="mt-5">
              <div className="itemDetails w-50 me-5 ms-5">
                <h2>productDetails</h2>
                <hr />
                <h4>{postDetails.itemName}</h4>
                <small className="text-muted">{postDetails.category}</small>
                <small className="text-muted me-4">
                  <span>
                    {" "}
                    <AiOutlineCalendar />
                  </span>{" "}
                  {postDetails.createdDate}
                </small>
              </div>
              <Col>
                <div className="cardSection">
                  <Container>
                    <h1 className="mb-3 price">${postDetails.price}</h1>

                    <div className="btnSection">
                      <div className="makeoffr">
                        <button
                          className="btn btn-primary btn-lg mb-3 w-100"
                          onClick={() => (!user ? history.push("./login") : "")}
                        >
                          Make offer
                        </button>
                      </div>

                      <div className="chat num">
                        <button
                          className="btn btn-outline-primary btn-lg mb-3 w-100"
                          onClick={() =>
                            !user
                              ? history.push("./login")
                              : history.push("./chat-section")
                          }
                        >
                          Chat with seller
                        </button>
                      </div>
                      <h6 className="contactNo">
                        <span>
                          <AiOutlinePhone />
                        </span>{" "}
                        +12345679
                      </h6>
                    </div>
                  </Container>
                </div>
              </Col>
            </Row>
            <Row>
              {/*second*/}

              <Col>
                <div className="viewParentDiv">
                  <div className="contactDetails">
                    <h2>contactDetails</h2>
                    <hr />
                    <h4>UserName: {userDetails.userName}</h4>
                    <small className="text-muted">
                      Phone no: {userDetails.phone}
                    </small>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="d-flex justify-content-center mt-5">
          <Col>
            <div className="fullCard">
              <div>
                <h2 className="text-muted">Related items</h2>
              </div>
              {product
                .filter((products) => products.id !== postDetails.id)
                .map((value, index) => {
                  return (
                    <Card
                      onClick={() => {
                        setPostDetails(value);
                        history.push("/view");
                      }}
                    >
                      <div>
                        <Card.Img src={value.url} style={{ width: "100px" }} />
                      </div>
                      <Card.Body>
                        <Card.Title>$ {value.price}</Card.Title>
                        <Card.Text>{value.itemName}</Card.Text>
                      </Card.Body>
                    </Card>
                  );
                })}
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
export default View;
