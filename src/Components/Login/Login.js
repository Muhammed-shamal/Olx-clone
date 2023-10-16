import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import Logo from "../../olx-logo.png";
import { FirebaseContext } from "../../store/Context";
import "./Login.css";
import { SignUpLoading } from "../../Loading/SignupLoading";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { firebase } = useContext(FirebaseContext);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleLogin = (event) => {
    event.preventDefault();
    setLoading(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push("/");
      })
      .catch((error) => {
        alert("Please correct your data first");
      });
  };
  return (
    <div>
      {loading && <SignUpLoading />}
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt="" />
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            onChange={(event) => setEmail(event.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
            onChange={(event) => setPassword(event.target.value)}
          />
          <br />
          <br />
          <button type="submit">Login</button>
        </form>
        <a onClick={() => history.push("/sign")}>Signup</a>
      </div>
    </div>
  );
}

export default Login;
