import React, { useContext } from "react";
import Heart from "../../assets/Heart";
import "./PostCards.css";
import { useHistory } from "react-router-dom";
import { PostContext } from "../../store/PostContext";

function PostCards({ product, index }) {
  const { setPostDetails } = useContext(PostContext);
  const history = useHistory(); //at the time of onClick on post , we want redirect to the view post page

  return (
    <div
      className="card row"
      key={index}
      onClick={() => {
        setPostDetails(product);
        history.push("/view");
        console.log(product);
      }}
    >
      <div className="favorite">
        <Heart></Heart>
      </div>
      <div className="image">
        <img src={product.url} alt="" />
      </div>
      <div className="content">
        <p className="rate">&#x20B9; {product.price}</p>
        <span className="category"> {product.itemName} </span>
        <p className="name"> {product.category}</p>
        <small className="name"> {product.price}</small>
      </div>
      <div className="date">
        <span>{product.createdDate}</span>
      </div>
    </div>
  );
}

export default PostCards;
