import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import Banner from "../../Components/Banner/Banner";
import Header from "../../Components/Header/Header";
import "./car.css";
import suzuki from "../../maruti-suzuki_3x.webp";
import PostCards from "../../Components/Posts/PostCards";
import mahindra from "../../mahindra_3x.webp";
import toyoto from "../../toyota_3x.webp";
import tata from "../../tata_3x.webp";
import Hundai from "../../hyundai_3x.webp";
import honda from "../../honda_3x.webp";
import Collapsible from "react-collapsible";
import {
  carDetails,
  carsName,
  carYear,
  fuielType,
  kmDriven,
  oweners,
} from "./vehicleName";

import { FirebaseContext } from "../Context";
import BarLoading from "../../Loading/BarLoading";

export default function Car() {
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
      });
  }, []);

  let quickMenuCards = post
    .filter((product) => product.type === "Car")
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
            <h4 className="mt-3 mb-3">Buy & sell used cars</h4>
            <h6 className="mt-3 mb-3">Categories</h6>

            <h5 className="mt-4 mb-3">-All category</h5>

            <h6 className="text-muted mt-2 mb-2">Filters</h6>

            <Collapsible trigger={"BRAND AND MODEL"}>
              <div class="content mb-2 mt-2">
                <div className="input-field d-flex justify-content-between mb-2 mt-3">
                  <input
                    className="py-1 pl-2"
                    type="text"
                    placeholder="Search brand model"
                  />
                  <span>
                    <AiOutlineSearch />
                  </span>
                </div>

                <div className="mt-3 mb-3">
                  <h6>Popular Brands</h6>
                  <div className="row ml-1 content">
                    <label htmlFor="mruthi suzuki">
                      <div className="mt-4">
                        <picture>
                          <img
                            style={{ width: "100px" }}
                            className="pic"
                            src={suzuki}
                            alt=""
                          />
                        </picture>
                      </div>
                    </label>

                    <label htmlFor="Hundai">
                      <div className="mt-4">
                        <picture>
                          <img
                            style={{ width: "100px" }}
                            className="pic"
                            src={Hundai}
                            alt=""
                          />
                        </picture>
                      </div>
                    </label>

                    <label htmlFor="mahindra">
                      <div className="mt-4">
                        <picture>
                          <img
                            style={{ width: "100px" }}
                            className="pic"
                            src={mahindra}
                            alt=""
                          />
                        </picture>
                      </div>
                    </label>
                  </div>

                  <hr />

                  {/* second */}
                  <div className="row ml-1">
                    <label htmlFor="mruthi suzuki" className="border">
                      <div className="mt-4">
                        <picture>
                          <img
                            style={{ width: "100px" }}
                            className="pic"
                            src={tata}
                            alt=""
                          />
                        </picture>
                      </div>
                    </label>

                    <label htmlFor="Hundai">
                      <div className="mt-4">
                        <picture>
                          <img
                            style={{ width: "100px" }}
                            className="pic"
                            src={honda}
                            alt=""
                          />
                        </picture>
                      </div>
                    </label>

                    <label htmlFor="mahindra">
                      <div className="mt-4">
                        <picture>
                          <img
                            style={{ width: "100px" }}
                            className="pic"
                            src={toyoto}
                            alt=""
                          />
                        </picture>
                      </div>
                    </label>
                  </div>
                </div>
                <hr />

                <div>
                  <h5>ALL BRANDS</h5>

                  <div
                    style={{
                      position: "relative",
                      height: "auto",
                      overflow: "auto",
                      direction: "ltr",
                      willChange: "auto",
                    }}
                  >
                    {carsName.map((names) => {
                      return (
                        <ul className="list-unstyled brandList">
                          <li>
                            <input type={"checkbox"} className="mr-2 mt-2" />
                            {names}
                          </li>
                        </ul>
                      );
                    })}
                  </div>
                </div>

                <h5>ALL BRANDS</h5>

                <div>
                  {carsName.map((names) => {
                    return (
                      <ul className="list-unstyled brandList">
                        <li>
                          <input type={"checkbox"} className="mr-2 mt-2" />
                          {names}
                        </li>
                      </ul>
                    );
                  })}
                </div>
              </div>
            </Collapsible>

            <hr />
            {/*second*/}

            <Collapsible trigger={"BUDGETS"}>
              <div class="content mb-2 mt-2">
                <small className="text-muted">Choose from option below</small>

                {carDetails.map((car) => {
                  return (
                    <div className="mb-2 mt-2 body1">
                      <div className="box">
                        <span>{car.price}</span>
                        <span>{car.numbers}</span>
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

            {/* fifth */}
            <Collapsible trigger={"FUEL"}>
              <div class="content mb-2 mt-2">
                <small className="text-muted mb-3 mt-3">
                  Choose from below
                </small>
                {fuielType.map((fuel) => {
                  return (
                    <div>
                      <input type="checkbox" />
                      <label className="ml-2">{fuel.fuiel}</label>
                    </div>
                  );
                })}
              </div>
            </Collapsible>
            <hr />

            {/* sixth */}
            <Collapsible trigger={"TRANSMITION"}>
              <div class="content mb-2 mt-2">
                <small className="text-muted mt-2 mb-3">
                  Choose from below option
                </small>

                <div className="boxBtn">
                  <span>Automatic</span>
                  <span>6547+</span>
                </div>

                <div className="boxBtn">
                  <span>Manual</span>
                  <span>15478+</span>
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
