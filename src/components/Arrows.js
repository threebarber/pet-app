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
  Stack
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate, redirect } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";

import { setAnimal } from "../reducers/animalReducer";

import { getAuthToken } from "../services";

import { setResults } from "../reducers/resultReducer";

import filterReducer from "../reducers/filterReducer";

import { setFilterKeyword, setFilterAge } from "../reducers/filterReducer";

import { setBreedData, setSelectedBreed } from "../reducers/breedReducer";

import { incrPage, decrPage } from "../reducers/pageReducer";

import axios from "axios";

const Arrows = (props) => {
  const dispatch = useDispatch();
  const sessionToken = useSelector((state) => state.session);
  const animalType = useSelector((state) => state.animalType.animal);
  const typeSet = useSelector((state) => state.animalType.isSet);
  const breedData = useSelector((state) => state.breed.breedData);
  const results = useSelector((state) => state.results);

  const page = useSelector((state) => state.page)


  return (


    <div
      style={{
        top: "90%",
        left: "90%",
        position: "fixed",
        transform: "translateY(-50%)",
        display: "flex",
        gap: "5px",
        justifyContent:"center"
      }}
    >
        
        <Stack gap={2} className="col-md-5 mx-auto">
      <div>
      <Button onClick={() => dispatch(decrPage())} variant="light" className={page > 1 ? 'enabled' : 'disabled'}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-caret-left"
          viewBox="0 0 16 16"
        >
          <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" />
        </svg>
      </Button>
      
      <Button onClick={() => dispatch(incrPage())} variant="light">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-caret-right"
          viewBox="0 0 16 16"
        >
          <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
        </svg>
      </Button>
      </div>
      <p className="text-center">Page: {page}</p>
      </Stack>
    </div>
  );
};

export default Arrows;
