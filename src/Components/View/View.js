import React, { useContext, useEffect, useState } from "react";
import { AuthContext, FirebaseContext } from "../../store/Context";
import { PostContext } from "../../store/PostContext";
import "./View.css";
import { Col, Container, Row, Card } from "react-bootstrap";
import { AiOutlineCalendar, AiOutlinePhone } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import img from "../../honda_3x.webp";
import { BiArrowFromLeft, BiHeart, BiShare } from "react-icons/bi";
import { RxAvatar } from "react-icons/rx";
import Heart from "../../assets/Heart";
import PostCards from "../../Components/Posts/PostCards";

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


  let relatedItems = product
    .filter((products) => products.id !== postDetails.id).map((product, index) => {
      return (
        <div className="fresh-recomendation-card" key={index}>
          <PostCards product={product} index={index} />
        </div>
      );
    });

  return (
    <>
      <Header />
      <div style={{ paddingTop: "50px", paddingBottom: "40px" }}></div>

      <Container >
        <Row>
          <Col xl="6">
            {/* <img src={postDetails.url} className="card-img me-3" alt="img" /> */}
            <img src={postDetails.url} alt="img" className="card-img img-fluid" style={{ height: "auto" }} />
          </Col>

          <Col>
            <div
              className="card-section1"
              style={{
                padding: "10px",
              }}
            >
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <Card.Title as="h4">${postDetails.price}</Card.Title>

                  <div className="mb-3">
                    <BiShare style={{ marginRight: "5px" }} />
                    <BiHeart />
                  </div>
                </div>

                <div className="d-flex justify-content-between">
                  <small className="text-muted">Kerala, kannur, 670702F</small>
                  <small className="text-muted">
                    {postDetails.createdDate}
                  </small>
                </div>
              </div>
            </div>

            <div className="card-section2">
              <Col>
                <h6>User Detail</h6>
                <div className="">
                  <RxAvatar className="mb-1" style={{ marginRight: "5px" }} />
                  <span>{user.displayName}</span>
                </div>

                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-outline-primary btn-sm mt-2 w-50"
                    onClick={() => {
                      user
                        ? history.push("/commingSoon")
                        : history.push("/sign");
                    }}
                  >
                    Chat with Seller
                  </button>

                  <button
                    className="btn btn-primary mt-2 w-50 btn-sm"
                    onClick={() => {
                      user
                        ? history.push("/commingSoon")
                        : history.push("/sign");
                    }}
                  >
                    Make Offer
                  </button>
                </div>
              </Col>
            </div>

            <div className="card-section3">
              <h4>Details</h4>

              <Card.Title as={"h6"}>
                <small>{postDetails.year}</small> {postDetails.itemName}
              </Card.Title>
              <Card.Text>{postDetails.category}</Card.Text>
              <small>{postDetails.km} Kilometers </small>
              <Card.Text>{postDetails.description}</Card.Text>
            </div>
          </Col>
        </Row>

        <Col className=" mt-3 mb-5">
          <div className="cards">
            {relatedItems}
          </div>
        </Col>
      </Container>
      <Footer />
    </>
  );
}
export default View;
