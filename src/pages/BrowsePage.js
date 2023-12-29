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
} from "react-bootstrap";
import { Link, Navigate, redirect } from "react-router-dom";

import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import animalReducer, { setAnimal } from "../reducers/animalReducer";

import { useSelector, useDispatch } from "react-redux";

import Results from "../components/Results";

import SideBar from "../components/SideBar";

import TopNav from "../components/TopNav";

import Arrows from "../components/Arrows";

import { useEffect } from "react";

const BrowsePage = (props) => {
  const dispatch = useDispatch();

  let { animal } = useParams();

  const animalType = useSelector((state) => state.animalType.animal);

  const isTypeChosen = useSelector((state) => state.animalType.isSet);

  let navigate = useNavigate();

  useEffect(() => {
    if (!isTypeChosen) {
      return navigate("/");
    }
  }, [isTypeChosen]);

  return isTypeChosen ? (
    <>
      <TopNav />
      <Container
        style={{
          border: "solid red 10px",
          padding:"20px"
        }}
      >
        <Results />
      </Container>
      <Arrows />
    </>
  ) : null;
};

export default BrowsePage;
