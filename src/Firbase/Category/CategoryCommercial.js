import React, { useContext, useState } from "react";
import { Button, Container, Form, InputGroup, Navbar } from "react-bootstrap";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { AuthContext, FirebaseContext } from "../../store/Context";
import Footer from "../../Components/Footer/Footer";
import "./categorycar.css";

export default function CategoryCommercial() {
  const [img, setImg] = useState(null);
  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState("");
  const [km, setKm] = useState("");
  const [description, setDescription] = useState("");
  const [transmition, setTransmition] = useState("");
  const [type, setType] = useState("");
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
            category,
            price,
            url,
            description,
            fuel,
            km,
            transmition,
            year,
            userId: user.uid,
            createdDate: date.toDateString(),
            type,
          });
          history.push("/");
        });
      });
  };

  const exitFunction = () => {
    if (
      window.confirm(
        "Are you sure you want to leave? Your progress will not be saved"
      ) === true
    ) {
      history.push("/category");
    }
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
              <AiOutlineArrowLeft onClick={exitFunction} />
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
                  data-aut-id="dd-state"
                  onChange={(event) => setType(event.target.value)}
                >
                  <option value="unknown"></option>
                  <option value="Car">Commercial</option>
                </select>
              </div>
            </Form.Group>
            <Form.Group className="mb-3 mt-3">
              <Form.Label>Brand *</Form.Label>
              <div>
                <select
                  data-aut-id="ddmake"
                  onChange={(event) => setCategory(event.target.value)}
                >
                  <option value=""></option>
                  <optgroup label="Popular Brand"></optgroup>
                  <option value="maruti-suzuki">Tata</option>
                  <option value="hyundai">Bharat Benz</option>
                  <option value="tata">Mahindra</option>
                  <option value="toyota">Toyota</option>
                  <option value="ashok-leyland-1">Ashok Leyland</option>
                  <option value="aston-1">Aston</option>
                  <option value="chevrolet">Chevrolet</option>
                  <option value="chrysler">Chrysler</option>
                  <option value="eicher-polaris">Eicher Polaris</option>
                  <option value="ferrari">Ferrari</option>
                  <option value="fiat">Fiat</option>
                  <option value="force-motors">Force Motors</option>
                  <option value="ford">Ford</option>
                  <option value="cars-honda">Honda</option>
                  <option value="isuzu">Isuzu</option>
                  <option value="jaguar">Jaguar</option>
                  <option value="jeep">Jeep</option>
                  <option value="lamborghini">Lamborghini</option>
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

            <div className="btn-section mb-3">
              <Form.Label>Fuiel *</Form.Label>
              <div>
                <Button
                  className="btn btn-sm mr-2"
                  onClick={(event) => setFuel(event.target.value)}
                >
                  CNG && HYBRID
                </Button>
                <Button
                  className="btn btn-sm mr-2"
                  onClick={(event) => setFuel(event.target.value)}
                >
                  PETROL
                </Button>
                <Button
                  className="btn btn-sm mr-2"
                  onClick={(event) => setFuel(event.target.value)}
                >
                  DEISEL
                </Button>
                <Button
                  className="btn btn-sm mr-2"
                  onClick={(event) => setFuel(event.target.value)}
                >
                  ELECTRIC
                </Button>
              </div>
            </div>

            <div className="transmition mb-3">
              <Form.Label>Transmition *</Form.Label>
              <div>
                <Button
                  className="btn btn-sm mr-2"
                  onChange={(event) => setTransmition(event.target.value)}
                >
                  Automatic
                </Button>
                <Button
                  className="btn btn-sm mr-2"
                  onChange={(event) => setTransmition(event.target.value)}
                >
                  Manual
                </Button>
              </div>
            </div>

            <Form.Group className="mb-3 mt-2">
              <Form.Label>KM Driven</Form.Label>
              <Form.Control
                size="lg"
                className="w-50"
                onChange={(event) => setKm(event.target.value)}
              />
              <div class="rui-1rV1O">
                <span hidden className="text-danger" data-aut-id="">
                  KM driven is mandatory. Please complete the required field.
                </span>
                <small className="text-secondary d-flex justify-content-end w-50">
                  0 / 6
                </small>
              </div>
            </Form.Group>

            <Form.Group>
              <Form.Label>No : owners</Form.Label>
              <div>
                <Button className="btn btn-sm mr-2">1st</Button>
                <Button className="btn btn-sm mr-2">2nd</Button>
                <Button className="btn btn-sm mr-2">3rd</Button>
                <Button className="btn btn-sm mr-2">4th</Button>
                <Button className="btn btn-sm mr-2">4th+</Button>
              </div>
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
              <InputGroup
                className="w-50"
                onChange={(event) => setPrice(event.target.value)}
              >
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control size="lg" />
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
                multiple
                onChange={(event) => setImg(event.target.files[0])}
              />
            </div>

            <Form.Group className="mb-3 mt-3">
              <h4>CONFIRM YOUR LOCATION</h4>
              <Form.Label>state *</Form.Label>
              <div>
                <select data-aut-id="dd-state">
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
