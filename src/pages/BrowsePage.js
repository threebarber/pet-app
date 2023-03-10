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
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";


const BrowsePage = (props) => {

    let {animal} = useParams();

  return (
    <Container>
        <h2>Browsing: {animal} </h2>
    </Container>
    
        
  );
};

export default BrowsePage;
