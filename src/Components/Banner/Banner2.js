import React from "react";

import "./Banner.css";
import Arrow from "../../assets/Arrow";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function Banner2() {
  const history = useHistory();
  return (
    <div
      style={{
        border: "1px gray",
        boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
    >
      <div className="bannerParentDiv">
        <div className="bannerChildDiv">
          <div className="menuBar">
            <div className="categoryMenu">
              <span>ALL CATEGORIES</span>
              <Arrow></Arrow>
            </div>
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
              <span style={{ cursor: "pointer" }}>Mobile Ph...</span>
              <span style={{ cursor: "pointer" }}>
                For Sale:Houses & Apart...
              </span>
              <span style={{ cursor: "pointer" }}>Scoot...</span>
              <span style={{ cursor: "pointer" }}>
                Commercial & Other Ve...
              </span>
              <span style={{ cursor: "pointer" }}>
                For Rent: House & Apart...
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner2;
