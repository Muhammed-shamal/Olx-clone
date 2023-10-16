import React, { useContext, useEffect, useState } from "react";
//import Heart from "../../assets/Heart";
import "./Post.css";
import { FirebaseContext } from "../../store/Context";
import { Link } from "react-router-dom";
import Barloading from "../../Loading/BarLoading";
import PostCards from "./PostCards";
import { AllPostContext } from "../../store/AllPostContext";

function Posts() {
  const { setAllPost } = useContext(AllPostContext);
  const { firebase } = useContext(FirebaseContext);
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    firebase
      .firestore()
      .collection("products")
      .get()
      .then((snapshot) => {
        const allPostDesendingOrder = snapshot.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        setPost(allPostDesendingOrder);
        setAllPost(allPostDesendingOrder);
        setLoading(false);
      });
  }, [setAllPost]);

  // quickMenuCards assign all cards of post item later it will be displayed
  let quickMenuCards = post.map((product, index) => {
    return (
      <div className="fresh-recomendation-card" key={index}>
        <PostCards product={product} index={index} />{" "}
      </div>
    );
  });

  return (
    <div className="postParentDiv">
      <div className="moreView">
        {post && (
          <div className="">
            <div className="heading">
              <span className="mt-2 mb-4">Fresh recommendations</span>

              <Link to="./viewmore">
                <small className="mt-2 mb-4">View more</small>
              </Link>
            </div>
            <div className="cards">
              {loading ? <Barloading /> : quickMenuCards}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Posts;
