import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Banner from "../../Components/Banner/Banner";
import Header from "../../Components/Header/Header";
import "./car.css";
import Collapsible from "react-collapsible";
import { carYear, kmDriven, oweners } from "./vehicleName";
import PostCards from "../../Components/Posts/PostCards";
import { FirebaseContext } from "../Context";
import BarLoading from "../../Loading/BarLoading";
import { bikePrice } from "./BikeName";

export default function Bikes() {
  const date = new Date();
  const { firebase } = useContext(FirebaseContext);
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    firebase
      .firestore()
      .collection("products")
      .get()
      .then((snapshot) => {
        const allPostDesendingOrder = snapshot.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        setLoading(false);
        setPost(allPostDesendingOrder);
        //setAllPost(allPostDesendingOrder);
      });
  }, []);

  let quickMenuCards = post
    .filter((product) => product.type === "Bikes")
    .map((product, index) => {
      return (
        <div className="fresh-recomendation-card" key={index}>
          <PostCards product={product} index={index} />
        </div>
      );
    });
  return (
    <div>
      <div>
        <Header />
        <Banner />
      </div>

      <Container className="mt-5">
        <Row>
          <Col xl="4">
            <small className="mt-2 mb-2">Home</small>
            <h4 className="mt-3 mb-3">Buy & sell used Bikes</h4>
            <h6 className="mt-3 mb-3">Categories</h6>

            <h5 className="mt-4 mb-3">-All category</h5>

            <h6 className="text-muted mt-2 mb-2">Filters</h6>

            <hr />
            {/*second*/}

            <Collapsible trigger={"BUDGETS"}>
              <div class="content mb-2 mt-2">
                <small className="text-muted">Choose from option below</small>

                {bikePrice.map((price) => {
                  return (
                    <div className="mb-2 mt-2 body1">
                      <div className="box">
                        <span>{price.price}</span>
                        <span>{price.numbers}</span>
                      </div>
                    </div>
                  );
                })}

                <small className="text-muted">Choose a range below</small>
                <div className="rangeSetting">
                  <span>1000000+</span>
                  <button>
                    <span>Apply</span>
                  </button>
                </div>
              </div>
            </Collapsible>
            <hr />

            {/*third*/}
            <Collapsible trigger={"YEAR"}>
              <div class="content mb-2 mt-2">
                {carYear.map((year) => {
                  return (
                    <div className="mb-2 mt-2 body1">
                      <div className="box">
                        <span>{year.year}</span>
                        <span>{year.numbers}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div>
                <small className="text-muted mt-4 mb-4">
                  Choose a range below
                </small>

                <div className="d-flex justify-content-between mt-3">
                  <input
                    placeholder="2003"
                    spellCheck={false}
                    className="w-50 mr-2"
                  />
                  <span>to</span>
                  <input
                    placeholder={`${date.getFullYear()}`}
                    spellCheck={false}
                    className="w-50 ml-2"
                  />
                </div>
                <button className="btn btn-secondary btn-sm mt-3 mb-3 w-100">
                  Apply
                </button>
              </div>
            </Collapsible>
            <hr />

            {/* fourth */}
            <Collapsible trigger={"NO. OF OWNERS"}>
              <div class="content mb-2 mt-2">
                <small className="text-muted mb-3 mt-3">
                  Choose from below
                </small>

                <div className="mt-2 mb-2">
                  {oweners.map((ownerShips) => {
                    return (
                      <div>
                        <input type="checkbox" />
                        <label className="ml-2">{ownerShips.oweners}</label>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Collapsible>
            <hr />

            {/* seventh */}
            <Collapsible trigger={"KM Driven"}>
              <div class="content mb-2 mt-2">
                {kmDriven.map((kms) => {
                  return (
                    <div className="mb-2 mt-2 body1">
                      <div className="box">
                        <span>{kms.km}</span>
                        <span>{kms.numbers}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div>
                <small className="text-muted mt-4 mb-4">
                  Choose a range below
                </small>

                <div className="d-flex justify-content-between mt-3">
                  <input
                    placeholder="2003"
                    spellCheck={false}
                    className="w-50 mr-2"
                  />
                  <span>to</span>
                  <input
                    placeholder={`${date.getFullYear()}`}
                    spellCheck={false}
                    className="w-50 ml-2"
                  />
                </div>
                <button className="btn btn-secondary btn-sm mt-3 mb-3 w-100">
                  Apply
                </button>
              </div>
            </Collapsible>
            <hr />
          </Col>

          <Col className=" mt-3 mb-5">
            <div className="cards">
              {loading ? <BarLoading /> : quickMenuCards}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
