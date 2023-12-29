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
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

import { useEffect } from "react";

import { setAnimal } from "../reducers/animalReducer";
import { setSession } from "../reducers/sessionReducer";

import { getAuthToken } from "../services";

import axios from "axios";

const LandingPage = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const tokenResponse = await axios.get("/auth")
      dispatch(setSession(tokenResponse.data.access_token));
    })();
  }, []);

  return (
    <>
      <div style={{
        width:"100%",
        height:"100%",
        marginTop:"45vh",
        display:"flex",
        justifyContent:"space-around"
      }}>
        <Link to="/browse/cats">
          <Button
            variant="light"
            onClick={() => dispatch(setAnimal("cat"))}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M288 192h17.1c22.1 38.3 63.5 64 110.9 64c11 0 21.8-1.4 32-4v4 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V339.2L248 448h56c17.7 0 32 14.3 32 32s-14.3 32-32 32H160c-53 0-96-43-96-96V192.5c0-16.1-12-29.8-28-31.8l-7.9-1C10.5 157.6-1.9 141.6 .2 124s18.2-30 35.7-27.8l7.9 1c48 6 84.1 46.8 84.1 95.3v85.3c34.4-51.7 93.2-85.8 160-85.8zm160 26.5v0c-10 3.5-20.8 5.5-32 5.5c-28.4 0-54-12.4-71.6-32h0c-3.7-4.1-7-8.5-9.9-13.2C325.3 164 320 146.6 320 128v0V32 12 10.7C320 4.8 324.7 .1 330.6 0h.2c3.3 0 6.4 1.6 8.4 4.2l0 .1L352 21.3l27.2 36.3L384 64h64l4.8-6.4L480 21.3 492.8 4.3l0-.1c2-2.6 5.1-4.2 8.4-4.2h.2C507.3 .1 512 4.8 512 10.7V12 32v96c0 17.3-4.6 33.6-12.6 47.6c-11.3 19.8-29.6 35.2-51.4 42.9zM400 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"/></svg>
            <h2>View Cats</h2>
          </Button>
        </Link>{" "}
      

      
        <Link to="/browse/dogs">
          <Button
            variant="light"
            onClick={() => dispatch(setAnimal("dog"))}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <path fill="var(--ci-primary-color, currentColor)" d="M393.3,161.33,334.532,76.438a48.09,48.09,0,0,0-38.775-20.673l-111.527-1.6-.23,0c-57.579,0-101.757,9.631-130.21,56.634C27.3,154.551,16,229.08,16,360v16H52.557L29.024,496h32.61L85.167,376H96a99.521,99.521,0,0,0,70.088-27.992c16.979-16.246,29.226-38.472,35.419-64.274l.056-.232L229.006,152h-32.69L170.337,276.488C162.425,309.168,138.766,344,96,344H48.06c.869-113.266,11.182-180.419,33.105-216.634,18.4-30.4,45.295-41.191,102.724-41.206l111.408,1.6a16.026,16.026,0,0,1,12.925,6.891L374.7,190.67,464,205.554v16.959l-14.892,79.421c-4.395,23.441-11.908,35.249-42.718,38.95L280.084,362.493,279.249,496h32l.667-106.493,98.7-16.9c22.36-2.749,38.857-9.955,50.426-22.023,9.89-10.318,15.909-23.5,19.519-42.752L496,225.487V178.446Z" class="ci-primary"/> </svg>
            <h2>View dogs</h2>
          </Button>
        </Link>{" "}
      </div>
    </>
  );
};

export default LandingPage;
