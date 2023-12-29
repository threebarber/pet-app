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
  Navbar
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate, redirect } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";

import { setAnimal } from "../reducers/animalReducer";

import { getAuthToken } from "../services";

import { setResults } from "../reducers/resultReducer";

import filterReducer from "../reducers/filterReducer";

import { setFilterKeyword, setFilterAge} from "../reducers/filterReducer";

import { setBreedData, setSelectedBreed } from "../reducers/breedReducer";

import axios from "axios";

import SideBar from "./SideBar";


const TopNav = (props) => {

  return  (
    <>
      <Navbar bg="light" variant="dark" expand="lg" style={{
        padding:"2rem"
      }}>
        <SideBar />
        
      </Navbar>
      </>
  ) 
};

export default TopNav;
