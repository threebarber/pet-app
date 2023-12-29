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
  Stack,
  Modal,
  Carousel,
  ListGroupItem,
  Badge,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate, redirect } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";

import { setAnimal } from "../reducers/animalReducer";

import { getAuthToken } from "../services";

import { setResults } from "../reducers/resultReducer";

import axios from "axios";

const ResultCard = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const sessionToken = useSelector((state) => state.session);
  const animalType = useSelector((state) => state.animalType.animal);
  const typeSet = useSelector((state) => state.animalType.isSet);
  const results = useSelector((state) => state.results);

  return (
    <>
      <Card
        onClick={handleShow}
        style={{
          maxWidth: "15vw",
          minWidth: "10vw",
          height: "45vh",
          flexBasis: "100%",
          cursor: "pointer",
        }}
      >
        <Image
          src={props.imgUrl}
          style={{
            width: "15vw",
            height: "30vh",
            objectFit: "cover",
          }}
        />
        <Card.Body className="text-center align-items-center mx-auto">
          <Card.Title>{props.petName}</Card.Title>
          <Card.Text>
            <Stack direction="horizontal" gap={2}>
              <p>{props.petAge}</p>
              <div className="vr" />

              <p>
                {props.petBreed.length > 20
                  ? `${props.petBreed.split(" ")[0]}...`
                  : props.petBreed}
              </p>
              <div className="vr" />

              <p>{props.petSize}</p>
            </Stack>
          </Card.Text>
        </Card.Body>
      </Card>

      <Modal
        show={show}
        onHide={handleClose}
        centered
        size="lg"
        style={{
          margin: "auto",
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {props.petName}

            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                gap: "10px",
              }}
            >
              {" "}
              <span>{props.petAge}</span>
              <div className="vr" />
              <span>{props.petBreed}</span>
              <div className="vr" />
              <span>{props.petSize}</span> <div className="vr" />
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Image
            className="text-center align-items-center mx-auto"
            src={
              props.petData.photos[0]?.large ??
              "https://mylostpetalert.com/wp-content/themes/mlpa-child/images/nophoto.gif"
            }
            style={{
              margin: "auto",
              borderRadius: "10px",
              maxHeight: "40vh",
            }}
          />
          <Row>
            <Col>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-clipboard"
                    viewBox="0 0 16 16"
                    style={{ verticalAlign: "middle" }}
                  >
                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                  </svg>
                  <strong>Tags:</strong>
                  {props.petData.tags.length > 0 ? (
                    props.petData.tags.map((tag) => (
                      <Badge bg="light" text="dark">
                        {tag}
                      </Badge>
                    ))
                  ) : (
                    <> n/a</>
                  )}
                </ListGroup.Item>
                <ListGroupItem>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-app-indicator"
                    viewBox="0 0 16 16"
                    style={{ verticalAlign: "middle" }}
                  >
                    <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z" />
                    <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  </svg>{" "}
                  <strong>Status:</strong> {props.petData.status}
                </ListGroupItem>
                <ListGroupItem>
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-bicycle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935.807 1.29a3 3 0 1 1-.848.53l-.508-.812-2.076 3.322A.5.5 0 0 1 8 10.5H5.959a3 3 0 1 1-1.815-3.274L5 5.856V5h-.5a.5.5 0 0 1-.5-.5zm1.5 2.443-.508.814c.5.444.85 1.054.967 1.743h1.139L5.5 6.943zM8 9.057 9.598 6.5H6.402L8 9.057zM4.937 9.5a1.997 1.997 0 0 0-.487-.877l-.548.877h1.035zM3.603 8.092A2 2 0 1 0 4.937 10.5H3a.5.5 0 0 1-.424-.765l1.027-1.643zm7.947.53a2 2 0 1 0 .848-.53l1.026 1.643a.5.5 0 1 1-.848.53L11.55 8.623z" />
                    </svg>{" "}
                    <strong>Distance:</strong>{" "}
                    {props.petData.distance?.toFixed() != undefined
                      ? props.petData.distance?.toFixed() + " miles"
                      : "n/a"}
                  </p>
                </ListGroupItem>
                <ListGroupItem>
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-blockquote-left"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11zm5 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6zm0 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6zm-5 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11zm.79-5.373c.112-.078.26-.17.444-.275L3.524 6c-.122.074-.272.17-.452.287-.18.117-.35.26-.51.428a2.425 2.425 0 0 0-.398.562c-.11.207-.164.438-.164.692 0 .36.072.65.217.873.144.219.385.328.72.328.215 0 .383-.07.504-.211a.697.697 0 0 0 .188-.463c0-.23-.07-.404-.211-.521-.137-.121-.326-.182-.568-.182h-.282c.024-.203.065-.37.123-.498a1.38 1.38 0 0 1 .252-.37 1.94 1.94 0 0 1 .346-.298zm2.167 0c.113-.078.262-.17.445-.275L5.692 6c-.122.074-.272.17-.452.287-.18.117-.35.26-.51.428a2.425 2.425 0 0 0-.398.562c-.11.207-.164.438-.164.692 0 .36.072.65.217.873.144.219.385.328.72.328.215 0 .383-.07.504-.211a.697.697 0 0 0 .188-.463c0-.23-.07-.404-.211-.521-.137-.121-.326-.182-.568-.182h-.282a1.75 1.75 0 0 1 .118-.492c.058-.13.144-.254.257-.375a1.94 1.94 0 0 1 .346-.3z" />
                    </svg>
                    <strong>Description:</strong>{" "}
                    {props.petData.description || "n/a"}
                  </p>
                </ListGroupItem>

                <Button
                  variant="secondary"
                  href={props.petData.url}
                  target="_blank"
                  
                >
                  {" "}
                  View On Petfinder
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-bar-right"
                    viewBox="0 0 16 16"
                    style={{
                      verticalAlign: "text-top",
                    }}
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8Zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5Z"
                    />
                  </svg>{" "}
                </Button>
              </ListGroup>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default ResultCard;
