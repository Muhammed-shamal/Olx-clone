import React, { useContext } from "react";
import Heart from "../../assets/Heart";
import "./PostCards.css";
import { useHistory } from "react-router-dom";
import { PostContext } from "../../store/PostContext";

function PostCards({ product, index }) {
  const { setPostDetails } = useContext(PostContext);
  const history = useHistory();

  return (
    <div className="cont">
      <div className="row d-flex">
        <div className="col-12">
          <div
            className="card"
            key={index}
            onClick={() => {
              setPostDetails(product);
              history.push("/view");
            }}
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={product.url} alt="img" className="card-img" />
            </div>
            <div className=" mt-2 card-body">
              <p className="card-title rate">&#x20B9; {product.price}</p>
              <small className="card-text">{product.year}</small>
              <span className="category card-text"> {product.itemName} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCards;
