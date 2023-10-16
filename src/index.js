import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Context, { FirebaseContext } from "./store/Context";
import firebase from "./Firbase/config";
import './index.css';

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase }}>
    <Context>
      <App />
    </Context>
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
