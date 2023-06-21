import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../../olx-logo.png";
import { AuthContext, FirebaseContext } from "../../store/Context";
import "./Signup.css";

import { SignUpLoading } from "../../Loading/SignupLoading";
export default function Signup() {
  const history = useHistory();

  const [Username, setUserName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const { firebase } = useContext(FirebaseContext);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    firebase
      .auth()
      .createUserWithEmailAndPassword(Email, Password)
      .then((response) => {
        response.user.updateProfile({ displayName: Username }).then(() => {
          firebase
            .firestore()
            .collection("user")
            .add({
              id: response.user.uid,
              userName: Username,
              phone: Phone,
            })
            .then(() => {
              history.push("/login");
            });
        });
      });
  };
  return (
    <>
      {loading && <SignUpLoading />}
      <Container style={{ marginTop: "20em" }}>
        <Row>
          <Col>
            <div>
              <div className="signupParentDiv">
                <img width="200px" height="200px" src={Logo} alt="img" />
                <form>
                  <label htmlFor="fname">Username</label>
                  <br />
                  <input
                    className="input"
                    type="text"
                    id="fname"
                    name="name"
                    value={Username}
                    onChange={(event) => setUserName(event.target.value)}
                    defaultValue="John"
                  />
                  <br />
                  <label htmlFor="email">Email</label>
                  <br />
                  <input
                    className="input"
                    type="email"
                    id="email"
                    name="email"
                    value={Email}
                    onChange={(event) => setEmail(event.target.value)}
                    defaultValue="John"
                  />
                  <br />
                  <label htmlFor="lname">Phone</label>
                  <br />
                  <input
                    className="input"
                    id="lname"
                    name="phone"
                    value={Phone}
                    onChange={(event) => setPhone(event.target.value)}
                    defaultValue="Doe"
                  />
                  <br />
                  <label htmlFor="lname">Password</label>
                  <br />
                  <input
                    className="input"
                    type="password"
                    id="password"
                    name="password"
                    value={Password}
                    onChange={(event) => setPassword(event.target.value)}
                    defaultValue="Doe"
                  />
                  <br />
                  <br />
                  <button onClick={handleSubmit}>Signup</button>
                </form>
                <a onClick={() => history.push("/login")} href="#login">
                  Login
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>{" "}
    </>
  );
}
