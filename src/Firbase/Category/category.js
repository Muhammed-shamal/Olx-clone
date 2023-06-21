import React from "react";
import {
  ListGroup,
  Container,
  Navbar,
  Tab,
  TabContainer,
  Row,
  Col,
} from "react-bootstrap";
import "./category.css";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineBuild,
  AiOutlineCar,
  AiOutlineMobile,
} from "react-icons/ai";
import { BiBook, BiCycling, BiTv } from "react-icons/bi";
import { GiCat, GiTyre } from "react-icons/gi";
//import {}from 'react-icons/all'
import Footer from "../../Components/Footer/Footer";
import { useHistory } from "react-router-dom";

export default function Category() {
  const history = useHistory();
  return (
    <div style={{ overflow: "hidden" }}>
      <Container>
        <Navbar
          className="nav"
          fixed="top"
          expand="lg"
          variant="light"
          bg="light"
        >
          <Container fluid>
            <Navbar.Brand href="#">
              <span>
                <AiOutlineArrowLeft onClick={() => window.history.back()} />
              </span>
            </Navbar.Brand>
          </Container>
        </Navbar>

        <div className="section_one">
          <h2 className="text-upperCase text-center mb-4">Post your ads</h2>
          <div className="listItem">
            <h4 className="mb-3 mt-2">Choose a category</h4>

            <TabContainer>
              <Row>
                <Col sm={6}>
                  <ListGroup>
                    <ListGroup.Item
                      className="text-muted d-flex justify-content-between"
                      action
                      href="#link1"
                    >
                      <span>
                        <AiOutlineCar className="mr-2" />
                      </span>
                      Olx Autos Cars
                      <span>
                        <AiOutlineArrowRight className="mr-2" />
                      </span>
                    </ListGroup.Item>
                    <ListGroup.Item
                      className="text-muted d-flex justify-content-between"
                      action
                      href="#link2"
                    >
                      <span>
                        <AiOutlineBuild className="mr-2" />
                      </span>
                      Properties
                      <span>
                        <AiOutlineArrowRight className="mr-2" />
                      </span>
                    </ListGroup.Item>
                    <ListGroup.Item
                      className="text-muted d-flex justify-content-between"
                      action
                      href="#link3"
                    >
                      <span>
                        <AiOutlineMobile className="mr-2" />
                      </span>
                      Mobiles
                      <span>
                        <AiOutlineArrowRight className="mr-2" />
                      </span>
                    </ListGroup.Item>

                    <ListGroup.Item
                      className="text-muted d-flex justify-content-between"
                      action
                      href="#link4"
                    >
                      <span>
                        <BiBook className="mr-2" />
                      </span>
                      Books sport
                      <span>
                        <AiOutlineArrowRight className="mr-2" />
                      </span>
                    </ListGroup.Item>

                    <ListGroup.Item
                      className="text-muted d-flex justify-content-between"
                      action
                      href="#link5"
                    >
                      <span>
                        <BiTv className="mr-2" />
                      </span>
                      Electric and Appliance
                      <span>
                        <AiOutlineArrowRight className="mr-2" />
                      </span>
                    </ListGroup.Item>

                    <ListGroup.Item
                      className="text-muted d-flex justify-content-between"
                      action
                      href="#link6"
                    >
                      <span>
                        <BiCycling className="mr-2" />
                      </span>
                      Bikes
                      <span>
                        <AiOutlineArrowRight className="mr-2" />
                      </span>
                    </ListGroup.Item>

                    <ListGroup.Item
                      className="text-muted d-flex justify-content-between"
                      action
                      href="#link7"
                    >
                      <span>
                        <GiTyre className="mr-2" />
                      </span>
                      Commercial
                      <span>
                        <AiOutlineArrowRight className="mr-2" />
                      </span>
                    </ListGroup.Item>

                    <ListGroup.Item
                      className="text-muted d-flex justify-content-between"
                      action
                      href="#link8"
                    >
                      <span>
                        <GiCat className="mr-2" />
                      </span>
                      Pets
                      <span>
                        <AiOutlineArrowRight className="mr-2" />
                      </span>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>

                <Col sm="6">
                  <Tab.Content>
                    <Tab.Pane
                      eventKey="#link1"
                      onClick={() => history.push("/category-car")}
                    >
                      <ListGroup.Item
                        className="text-muted "
                        action
                        href="#link1"
                      >
                        <span>
                          <AiOutlineCar className="mr-2" />
                        </span>
                        Cars
                      </ListGroup.Item>
                    </Tab.Pane>
                    <Tab.Pane
                      eventKey="#link2"
                      onClick={() => history.push("/category-book")}
                    >
                      <ListGroup>
                        <ListGroup.Item
                          className="text-muted"
                          action
                          href="#link2"
                        >
                          For Rent: House & Apparement
                        </ListGroup.Item>

                        <ListGroup.Item
                          className="text-muted"
                          action
                          href="#link3"
                        >
                          Land and Plots
                        </ListGroup.Item>

                        <ListGroup.Item
                          className="text-muted"
                          action
                          href="#link4"
                        >
                          PG and Guest
                        </ListGroup.Item>

                        <ListGroup.Item
                          className="text-muted"
                          action
                          href="#link5"
                        >
                          For sale and & Office
                        </ListGroup.Item>
                      </ListGroup>
                    </Tab.Pane>

                    <Tab.Pane
                      eventKey="#link3"
                      onClick={() => history.push("/category-electric")}
                    >
                      <ListGroup>
                        <ListGroup.Item
                          className="text-muted"
                          action
                          href="#link6"
                        >
                          Mobiles
                        </ListGroup.Item>
                        <ListGroup.Item
                          className="text-muted"
                          action
                          href="#link7"
                        >
                          Mobiles Services
                        </ListGroup.Item>
                        <ListGroup.Item
                          className="text-muted"
                          action
                          href="#link8"
                        >
                          Mobiles Accessories
                        </ListGroup.Item>
                      </ListGroup>
                    </Tab.Pane>

                    <Tab.Pane
                      eventKey="#link4"
                      onClick={() => history.push("/create")}
                    >
                      <ListGroup>
                        {" "}
                        <ListGroup.Item
                          className="text-muted"
                          action
                          href="#link9"
                        >
                          Novels
                        </ListGroup.Item>
                        <ListGroup.Item
                          className="text-muted"
                          action
                          href="#link10"
                        >
                          Short Story
                        </ListGroup.Item>
                        <ListGroup.Item
                          className="text-muted"
                          action
                          href="#link11"
                        >
                          Poems
                        </ListGroup.Item>
                        <ListGroup.Item
                          className="text-muted"
                          action
                          href="#link12"
                        >
                          Story
                        </ListGroup.Item>
                      </ListGroup>
                    </Tab.Pane>

                    <Tab.Pane
                      eventKey="#link5"
                      onClick={() => history.push("/create")}
                    >
                      <ListGroup>
                        <ListGroup.Item
                          className="text-muted"
                          action
                          href="#link13"
                        >
                          Fridge
                        </ListGroup.Item>
                        <ListGroup.Item
                          className="text-muted"
                          action
                          href="#link14"
                        >
                          Tv && laptops
                        </ListGroup.Item>
                        <ListGroup.Item
                          className="text-muted"
                          action
                          href="#link15"
                        >
                          Iron box
                        </ListGroup.Item>
                      </ListGroup>
                    </Tab.Pane>

                    <Tab.Pane
                      eventKey="#link6"
                      onClick={() => history.push("/category-bikes")}
                    >
                      <ListGroup>
                        <ListGroup.Item
                          className="text-muted"
                          action
                          href="#link13"
                        >
                          MotorCycle
                        </ListGroup.Item>
                        <ListGroup.Item
                          className="text-muted"
                          action
                          href="#link14"
                        >
                          Bikes
                        </ListGroup.Item>
                        <ListGroup.Item
                          className="text-muted"
                          action
                          href="#link15"
                        >
                          Scooty
                        </ListGroup.Item>
                      </ListGroup>
                    </Tab.Pane>

                    <Tab.Pane
                      eventKey="#link7"
                      onClick={() => history.push("/category-commercial")}
                    >
                      <ListGroup>
                        <ListGroup.Item
                          className="text-muted"
                          action
                          href="#link13"
                        >
                          Commercial Vehilces
                        </ListGroup.Item>
                        <ListGroup.Item
                          className="text-muted"
                          action
                          href="#link14"
                        >
                          Sparks
                        </ListGroup.Item>
                        <ListGroup.Item
                          className="text-muted"
                          action
                          href="#link15"
                        >
                          Commercialitems
                        </ListGroup.Item>
                      </ListGroup>
                    </Tab.Pane>

                    <Tab.Pane
                      eventKey="#link8"
                      onClick={() => history.push("/create")}
                    >
                      <ListGroup>
                        <ListGroup.Item
                          className="text-muted"
                          action
                          href="#link13"
                        >
                          Cats && Dogs
                        </ListGroup.Item>
                        <ListGroup.Item
                          className="text-muted"
                          action
                          href="#link14"
                        >
                          Aquarium Fishes
                        </ListGroup.Item>
                        <ListGroup.Item
                          className="text-muted"
                          action
                          href="#link15"
                        >
                          Birds
                        </ListGroup.Item>
                      </ListGroup>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </TabContainer>
          </div>
        </div>
      </Container>
      <div style={{ paddingBottom: "100px" }}></div>
      <Footer />
    </div>
  );
}
