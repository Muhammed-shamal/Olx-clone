import React, { useState } from "react";
import bannerImg from "./banner_india_timesprime_desktop_1x.webp";
import "./Banner.css";
import Arrow from "../../assets/Arrow";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Dropdown } from "react-bootstrap";
function Banner() {
  const history = useHistory();
  const [show, setShow] = useState(false);
  return (
    <div className=" bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
            <span onClick={() => setShow(!show)}>ALL CATEGORIES</span>
            <Arrow />
          </div>

          {/* <Dropdown hidden>
            <Dropdown.Toggle variant="light"></Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => history.push("/cars")}
                >
                  Cars
                </span>
              </Dropdown.Item>

              <Dropdown.Item>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => history.push("/bikes")}
                >
                  Motorcy...
                </span>
              </Dropdown.Item>

              <Dropdown.Item>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => history.push("/commercial")}
                >
                  Commercial & Other Ve...
                </span>
              </Dropdown.Item>

              <Dropdown.Item>
                {" "}
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => history.push("/bikes")}
                >
                  Scoot...
                </span>
                <span style={{ cursor: "pointer" }}>Mobile Ph...</span>
              </Dropdown.Item>

              <Dropdown.Item>
                <span style={{ cursor: "pointer" }}>
                  For Sale:Houses & Apart...
                </span>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}
          
          <div className="otherQuickOptions">
            <span
              style={{ cursor: "pointer" }}
              onClick={() => history.push("/cars")}
            >
              Cars
            </span>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => history.push("/bikes")}
            >
              Motorcy...
            </span>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => history.push("/commercial")}
            >
              Commercial & Other Ve...
            </span>

            <span
              style={{ cursor: "pointer" }}
              onClick={() => history.push("/bikes")}
            >
              Scoot...
            </span>

            <span style={{ cursor: "pointer" }}>Mobile Ph...</span>
            <span style={{ cursor: "pointer" }}>
              For Sale:Houses & Apart...
            </span>

            <span style={{ cursor: "pointer" }}>
              For Rent: House & Apart...
            </span>
          </div>
        </div>
        <div className="banner">
          <img src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
