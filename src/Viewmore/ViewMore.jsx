import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { AllPostContext } from "../store/AllPostContext";
import Pagination from "../Pagination/Pagination";
import PostCards from "../Components/Posts/PostCards";
import "./Viewmore.css";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

function AllPosts() {
  const { allPost } = useContext(AllPostContext);

  let length = allPost.length; //if user refresh the whole page context will be empty so we want to redirect the user to the home page
  const history = useHistory();

  //pagination logic and implementation will start here
  let [currentPage, setCurrentPage] = useState(1);
  let itemsPerPage = 8;
  let indexOfLastDish = currentPage * itemsPerPage;
  let indexOfFirstDish = indexOfLastDish - itemsPerPage;
  let showTheseItems = allPost.slice(indexOfFirstDish, indexOfLastDish);

  let displayThesePosts = showTheseItems.map((product, index) => {
    return (
      <div className="all-post-card" key={index}>
        <PostCards product={product} index={index} />
      </div>
    );
  });
  return (
    <>
      <Header />
      {length !== 0 ? (
        <div className="display-all-parent">
          <div className="container-allpost">{displayThesePosts}</div>
          <Pagination setCurrentPage={setCurrentPage} />
        </div>
      ) : (
        history.push("/")
      )}
      <Footer />
    </>
  );
}

export default AllPosts;
