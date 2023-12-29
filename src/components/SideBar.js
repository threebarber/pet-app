import "../App.css";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import {
  Card,
  Container,
  Row,
  Col,
  ListGroup,
  Image,
  Button,
  InputGroup,
  Form,
  CloseButton
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate, redirect } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";

import { setAnimal } from "../reducers/animalReducer";

import { getAuthToken } from "../services";

import { setResults } from "../reducers/resultReducer";

import filterReducer from "../reducers/filterReducer";

import { setFilterKeyword, setFilterAge, setFilterSize, setFilterLocation } from "../reducers/filterReducer";

import { setBreedData, setSelectedBreed } from "../reducers/breedReducer";

import axios from "axios";

const SideBar = (props) => {
  const dispatch = useDispatch();

  const sessionToken = useSelector((state) => state.session);
  const animalType = useSelector((state) => state.animalType.animal);
  const typeSet = useSelector((state) => state.animalType.isSet);
  const breedData = useSelector((state) => state.breed.breedData);
  const results = useSelector((state) => state.results);

  /* age filter*/

  useEffect(() => {
    (async () => {
      const breedResponse = await axios.get(
        `https://api.petfinder.com/v2/types/${animalType}/breeds`,
        { headers: { Authorization: `Bearer ` + sessionToken } }
      );
      dispatch(setBreedData(breedResponse.data.breeds));
    })();
  }, []);

  const handleKeywordChange = (event) => {
    // input-field value is in variable event.target.value
    event.preventDefault();
    const filterContent = event.target.value;
    dispatch(setFilterKeyword(filterContent));
  };

  const handleBreedChange = (event) => {
    // input-field value is in variable event.target.value
    event.preventDefault();
    const breedContent = event.target.value;
    dispatch(setSelectedBreed(breedContent));
  };

  const handleAgeChange = (event) => {
    // input-field value is in variable event.target.value
    event.preventDefault();
    const ageContent = event.target.value;
    dispatch(setFilterAge(ageContent));
  };


  const handleSizeChange = (event) => {
    // input-field value is in variable event.target.value
    event.preventDefault();
    const sizeContent = event.target.value;
    dispatch(setFilterSize(sizeContent));
  };


  const handleLocationChange = (event) => {
    // input-field value is in variable event.target.value
    event.preventDefault();
    const locationContent = event.target.value;
    if(locationContent.length < 5){
        dispatch(setFilterLocation("ALL"));
    }else{
        dispatch(setFilterLocation(locationContent));
    }
  };

  return (
    <div
      style={{
      }}
    >
      <Row>
        <Col>
            <a
              href="/"
              target="_self"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <img
                width="40vw"
                src="https://cdn-icons-png.flaticon.com/512/1152/1152460.png"
              />
            </a>
        </Col>
        <Col>
          <InputGroup onChange={handleKeywordChange} className="">
            <InputGroup.Text id="keywordSearchInput">Search</InputGroup.Text>
            <Form.Control placeholder="Fluffy..." />
          </InputGroup>{" "}
        </Col>
        <Col>
          <InputGroup onChange={handleLocationChange} className="">
            <InputGroup.Text id="locationSearchInput">Location</InputGroup.Text>
            <Form.Control placeholder="Enter Zip Code" />
          </InputGroup>{" "}
        </Col>
        <Col>
          <Form.Select onChange={handleBreedChange}>
            <option value="ALL">All Breeds</option>
            {breedData.map((result) => (
              <option value={result.name}>{result.name}</option>
            ))}
          </Form.Select>{" "}
        </Col>
        <Col>
          <Form.Select onChange={handleAgeChange}>
            <option value="ALL">All Ages</option>
            <option value="baby">Baby</option>
            <option value="young">Young</option>
            <option value="adult">Adult</option>
            <option value="senior">Senior</option>
          </Form.Select>{" "}
        </Col>
        <Col>
          <Form.Select onChange={handleSizeChange}>
            <option value="ALL">All Sizes</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="xlarge">XLarge</option>
          </Form.Select>{" "}
        </Col>
      </Row>
    </div>
  );
};

export default SideBar;
