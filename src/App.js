import React, { useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

/**
 * ?  =====Import Components=====
 */
import Home from "./Pages/Home";
import Signup from "./Components/Signup/Signup";
import Create from "./Pages/Create";
import Login from "./Components/Login/Login";
import { AuthContext, FirebaseContext } from "./store/Context";
import View from "./Components/View/View";
import Post from "./store/PostContext";
import Category from "./Firbase/Category/category";
import CategoryCar from "./Firbase/Category/CategoryCar";
import CategoryBook from "./Firbase/Category/CategoryBook";
import Car from "./store/Types/Car";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import UserProfile from "./User_Profile/UserProfile";
import Chat from "./ChatArea/Chat";
import ContextAllPost from "./store/AllPostContext";
import AllPosts from "./Viewmore/ViewMore";
import EditProfile from "./User_Profile/editProfile";
import CommingSoon from "./Components/CommingSoon/CommingSoon";
import ChatArea from "./ChatArea/chatArea";
import CategoryBikes from "./Firbase/Category/CategoryBikes";
import Bikes from "./store/Types/Bikes";
import CategoryCommercial from "./Firbase/Category/CategoryCommercial";
import Commercial from "./store/Types/Commasial";
import CategoryElectric from "./Firbase/Category/CategoryElectric";

function App() {
  const { setUser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  });

  return (
    <div className="main">
      <ContextAllPost>
        <Post>
          <Router basename = "/">
            <Route exact path={"/"}>
              <Home />
            </Route>
            <Route path={"/sign"}>
              <Signup />
            </Route>

            <Route path={"/login"}>
              <Login />
            </Route>

            <Route path={"/view"}>
              <View />
            </Route>

            <Route path="/viewmore">
              <AllPosts />
            </Route>

            <Route path={"/category"}>
              <Category />
            </Route>

            <Route path={"/category-car"}>
              <CategoryCar />
            </Route>

            <Route path={"/category-book"}>
              <CategoryBook />
            </Route>

            <Route path={"/category-bikes"}>
              <CategoryBikes />
            </Route>

            <Route path={"/category-electric"}>
              <CategoryElectric />
            </Route>

            <Route path={"/category-commercial"}>
              <CategoryCommercial />
            </Route>

            <Route path={"/cars"}>
              <Car />
            </Route>

            <Route path={"/bikes"}>
              <Bikes />
            </Route>

            <Route path={"/commercial"}>
              <Commercial />
            </Route>

            <Route path="/user-profile">
              <UserProfile />
            </Route>

            <Route path="/edit-profile">
              <EditProfile />
            </Route>

            <Route path="/chat-section">
              <Chat />
            </Route>

            <Route path="/commingSoon">
              <CommingSoon />
            </Route>

            <Route path="/chatArea">
              <ChatArea />
            </Route>
          </Router>
        </Post>
      </ContextAllPost>
    </div>
  );
}

export default App;
