import React, { Fragment, useContext, useState } from "react";
import "./Create.css";
import Header from "../Header/Header";
import { FirebaseContext, AuthContext } from "../../store/Context";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState(null);
  const history = useHistory();

  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(AuthContext);
  const date = new Date();

  const handleUpload = () => {
    firebase
      .storage()
      .ref(`/image/${img.name}`)
      .put(img)
      .then(({ ref }) => {
        ref.getDownloadURL().then((url) => {
          console.log(url);
          firebase.firestore().collection("products").add({
            itemName,
            category,
            price,
            url,
            userId: user.uid,
            createdDate: date.toDateString(),
          });
          history.push("/");
        });
      });
  };
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="Name"
            onChange={(event) => setCategory(event.target.value)}
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Category</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="category"
            onChange={(event) => setItemName(event.target.value)}
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Price</label>
          <br />
          <input
            className="input"
            onChange={(event) => setPrice(event.target.value)}
            type="number"
            id="fname"
            name="Price"
          />
          <br />

          <br />
          <img
            alt="Posts"
            width="200px"
            height="200px"
            src={img ? URL.createObjectURL(img) : ""}
          ></img>

          <br />
          <input
            type="file"
            onChange={(event) => setImg(event.target.files[0])}
          />
          <br />
          <button className="uploadBtn" onClick={handleUpload}>
            upload and Submit
          </button>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
