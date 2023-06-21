import React, { useContext, useState } from "react";
import { Button, Container, Form, InputGroup, Navbar } from "react-bootstrap";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useHistory, useLocation } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import { AuthContext, FirebaseContext } from "../../store/Context";

export default function CategoryBikes() {
  const [img, setImg] = useState(null);
  const [itemName, setItemName] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [year, setYear] = useState("");
  const [km, setKm] = useState("");
  const [description, setDescription] = useState("");
  const [userDetails, setUserDetails] = useState("");
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(AuthContext);

  const date = new Date();

  const handlePost = () => {
    firebase
      .storage()
      .ref(`/image/${img.name}`)
      .put(img)
      .then(({ ref }) => {
        ref.getDownloadURL().then((url) => {
          console.log(url);
          firebase.firestore().collection("products").add({
            itemName,
            type,
            price,
            url,
            description,
            km,
            year,
            userId: user.uid,
            createdDate: date.toDateString(),
          });
          history.push("/");
        });
      });
  };

  firebase
    .firestore()
    .collection("user")
    .get()
    .then((res) => {
      res.forEach((doc) => {
        setUserDetails(doc.data());
      });
    });
  return (
    <div>
      <Navbar
        className="nav"
        fixed="top"
        expand="lg"
        variant="light"
        bg="light"
      >
        <Container fluid>
          <Navbar.Brand href="#">
            <span>
              <AiOutlineArrowLeft onClick={() => history.push("/category")} />
            </span>
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Container className="section_one">
        <h2 className="text-upperCase text-center mb-4">Post your ads</h2>
        <div className="box_one">
          <h4 className="mb-3 mt-2">Selected Category</h4>
        </div>

        <div className="box_two mb-2 mt-2">
          <h3>Include Some Details</h3>

          <Form>
            <Form.Group className="mb-3 mt-3">
              <Form.Label>Select the Type *</Form.Label>
              <div>
                <select
                  className="selection"
                  data-aut-id="dd-state"
                  onChange={(event) => setType(event.target.value)}
                >
                  <option value="unknown"></option>
                  <option value="Bikes">Bikes</option>
                </select>
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Year *</Form.Label>
              <Form.Control
                size="lg"
                className="w-50"
                onChange={(event) => setYear(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3 mt-2">
              <Form.Label>Ad title *</Form.Label>
              <Form.Control
                size="lg"
                className="w-50"
                onChange={(event) => setItemName(event.target.value)}
              />
              <div class="rui-1rV1O">
                <small className="text-secondary" data-aut-id="">
                  Mention the key features of your item (e.g. brand, model, age,
                  type)
                </small>
                <small className="text-secondary  ml-5">0 / 70</small>
              </div>
            </Form.Group>

            <Form.Group className="mb-3 mt-2">
              <Form.Label>Ad description *</Form.Label>
              <Form.Control
                size="lg"
                className="w-50"
                onChange={(event) => setDescription(event.target.value)}
              />
              <div class="rui-1rV1O">
                <small className="text-secondary" data-aut-id="">
                  Include condition, features and reason for selling
                </small>
                <small className="text-secondary ml-5">0 / 1500</small>
              </div>
            </Form.Group>

            <Form.Group className="mb-3 mt-3">
              <Form.Label>price *</Form.Label>
              <InputGroup className="w-50">
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control
                  size="lg"
                  onChange={(event) => setPrice(event.target.value)}
                />
              </InputGroup>
            </Form.Group>

            <div>
              <h4 className="mt-3 mb-2">UPLOAD UP TO 10 PHOTOS</h4>
              <br />
              <img
                alt="Posts"
                width="200px"
                height="200px"
                src={img ? URL.createObjectURL(img) : ""}
              ></img>
              <br />
              <Form.Control
                type="file"
                className="w-50"
                multiple="multiple"
                onChange={(event) => setImg(event.target.files[0])}
              />
            </div>

            <Form.Group className="mb-3 mt-3">
              <h4>CONFIRM YOUR LOCATION</h4>
              <Form.Label>state *</Form.Label>
              <div>
                <select className="selection" data-aut-id="dd-state">
                  <option value="unknown"></option>
                  <option value="2007598">Andaman &amp; Nicobar Islands</option>
                  <option value="2001145">Andhra Pradesh</option>
                  <option value="2001146">Arunachal Pradesh</option>
                  <option value="2001147">Assam</option>
                  <option value="2001148">Bihar</option>
                  <option value="2001149">Chandigarh</option>
                  <option value="2001178">Chhattisgarh</option>
                  <option value="2001150">Dadra &amp; Nagar Haveli</option>
                  <option value="2001151">Daman &amp; Diu</option>
                  <option value="2001152">Delhi</option>
                  <option value="2001153">Goa</option>
                  <option value="2001154">Gujarat</option>
                  <option value="2001155">Haryana</option>
                  <option value="2001156">Himachal Pradesh</option>
                  <option value="2001157">Jammu &amp; Kashmir</option>
                  <option value="2001158">Jharkhand</option>
                  <option value="2001159">Karnataka</option>
                  <option value="2001160">Kerala</option>
                  <option value="2001161">Lakshadweep</option>
                  <option value="2001162">Madhya Pradesh</option>
                  <option value="2001163">Maharashtra</option>
                  <option value="2001164">Manipur</option>
                  <option value="2001165">Meghalaya</option>
                  <option value="2001166">Mizoram</option>
                  <option value="2001167">Nagaland</option>
                  <option value="2001168">Odisha</option>
                  <option value="2001169">Pondicherry</option>
                  <option value="2001170">Punjab</option>
                  <option value="2001171">Rajasthan</option>
                  <option value="2001172">Sikkim</option>
                  <option value="2001173">Tamil Nadu</option>
                  <option value="2007599">Telangana</option>
                  <option value="2001174">Tripura</option>
                  <option value="2001176">Uttar Pradesh</option>
                  <option value="2001175">Uttaranchal</option>
                  <option value="2001177">West Bengal</option>
                </select>
              </div>
            </Form.Group>
          </Form>
        </div>

        <div className="box_three">
          <Form>
            <Form.Group>
              <h4>REVIEW YOUR DETAILS</h4>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                className="w-50"
                value={userDetails.userName}
              />
              <small className="text-secondary d-flex justify-content-end w-50">
                0 / 20
              </small>
            </Form.Group>

            <h5>Let's verify your account</h5>

            <Form.Text className="mt-3 mb-3">
              We will send you a confirmation code by sms on the next step.
            </Form.Text>
            <Form.Label>Mobile Phone Number</Form.Label>
            <InputGroup className="w-50">
              <InputGroup.Text>+91 </InputGroup.Text>
              <Form.Control size="lg" />
            </InputGroup>
          </Form>
        </div>

        <div className="box_four mt-3 mb-2">
          <Button onClick={handlePost}>Post Now</Button>
        </div>
      </Container>

      <Footer />
    </div>
  );
}
