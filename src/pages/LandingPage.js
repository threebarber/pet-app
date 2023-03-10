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

const LandingPage = (props) => {
  return (
    <Container
      style={{
        alignContent: "center",
        justifyContent: "center",
        border: "dashed pink 1px",
        maxWidth: "45vw",
        marginTop: "35vh",
        display: "flex",
        gap: "10vw",
        padding: "20px",
      }}
    >
        <Link to='/browse/cats'>
      <Button>Cats</Button>
      </Link>

      <h2>I am looking for...</h2>

      <Link to='/browse/dogs'>
      <Button>Dogs</Button>
      </Link>

    </Container>
  );
};

export default LandingPage;
