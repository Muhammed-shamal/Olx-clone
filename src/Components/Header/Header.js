import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import "./Header.css";
import OlxLogo from "../../assets/OlxLogo";
import Search from "../../assets/Search";
import Arrow from "../../assets/Arrow";
import SellButton from "../../assets/SellButton";
import SellButtonPlus from "../../assets/SellButtonPlus";
import { AuthContext, FirebaseContext } from "../../store/Context";
import { RxAvatar } from "react-icons/rx";
import {
  AiOutlineLogout,
  AiOutlineQuestion,
  AiOutlineSetting,
} from "react-icons/ai";
import { Button, Dropdown } from "react-bootstrap";
import {
  BiBell,
  BiChat,
  BiDownload,
  BiHeart,
  BiListPlus,
  BiListUl,
} from "react-icons/bi";

function Header() {
  const [show, setShow] = useState(false);
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(AuthContext);
  const history = useHistory();

  console.log(user);

  return (
    <div className=" headerParentDiv">
      <div className="headerChildDiv">
        <div
          className="brandName"
          style={{ cursor: "pointer" }}
          onClick={() => history.push("/") && history.go(0)}
        >
          <OlxLogo></OlxLogo>
        </div>

        <div>
          <select className="placeSearch">
            <option value="Your Location">Your Location</option>

            <optgroup label="Popular Location"></optgroup>
            <option value="maruti-suzuki">India</option>
            <option value="hyundai">TamilNadu</option>
            <option value="hyundai">Karnataka</option>
            <option value="hyundai">Mumbai</option>
          </select>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>

        <div className="chat-btn">
          <BiChat
            style={{ fontSize: "20px", cursor: "pointer" }}
            onClick={() => history.push("/chat-section")}
          />
        </div>

        <div className="bell">
          <BiBell
            style={{ fontSize: "20px", cursor: "pointer" }}
            onClick={() => {
              setShow(!show);
            }}
          />
        </div>

        <Dropdown placement="right" className="mr-5 mt-2">
          <Dropdown.Toggle variant="light"></Dropdown.Toggle>
          <Dropdown.Menu>
            <div className="loginPage">
              <Dropdown.Item>
                <span
                  onClick={
                    user
                      ? () => history.push("/user-profile")
                      : () => history.push("/login")
                  }
                >
                  {user ? <RxAvatar /> && user.displayName : "Login"}
                </span>
              </Dropdown.Item>

              <Button
                className="btn btn-sm ml-4 mt-2 mb-3"
                onClick={() => history.push("/user-profile")}
              >
                View and edit profile
              </Button>
              <Dropdown.Divider />

              <Dropdown.Item className="heart">
                <div onClick={() => history.push("/commingSoon")}>
                  <BiHeart /> BiHeart
                </div>
              </Dropdown.Item>

              <Dropdown.Item className="business">
                <div onClick={() => history.push("/commingSoon")}>
                  <BiListUl /> My Business Pakage
                </div>
              </Dropdown.Item>
              <Dropdown.Item className="billing">
                <div onClick={() => history.push("/commingSoon")}>
                  <BiListPlus /> Bought Pakage and Billing
                </div>
              </Dropdown.Item>
              <Dropdown.Divider />

              <Dropdown.Item className="help">
                <div
                  onClick={() =>
                    (window.location.href = "https://help.olx.in/hc/en-us")
                  }
                >
                  <AiOutlineQuestion /> Help
                </div>
              </Dropdown.Item>
              <Dropdown.Item className="setting">
                <AiOutlineSetting /> Setting
              </Dropdown.Item>
              <Dropdown.Divider />

              <Dropdown.Item className="setting">
                <div
                  onClick={() =>
                    (window.location.href =
                      "https://play.google.com/store/search?q=olx&c=apps")
                  }
                >
                  <BiDownload /> Install Olx Lite App
                </div>
              </Dropdown.Item>

              <Dropdown.Item className="logout">
                {user && (
                  <>
                    <span
                      onClick={() => {
                        firebase.auth().signOut();
                        history.push("/login");
                      }}
                    >
                      <AiOutlineLogout /> Logout
                    </span>
                  </>
                )}
              </Dropdown.Item>
            </div>
          </Dropdown.Menu>
        </Dropdown>

        <div
          className="sellMenu"
          onClick={() => {
            user ? history.push("/category") : history.push("/sign");
          }}
        >
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
