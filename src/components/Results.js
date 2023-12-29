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
  Spinner,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate, redirect } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";

import { setAnimal } from "../reducers/animalReducer";

import { getAuthToken } from "../services";

import { setResults } from "../reducers/resultReducer";

import ResultCard from "./ResultCard";

import axios from "axios";
import filterReducer from "../reducers/filterReducer";

const Results = (props) => {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const sessionToken = useSelector((state) => state.session);
  const animalType = useSelector((state) => state.animalType.animal);
  const typeSet = useSelector((state) => state.animalType.isSet);

  /** use effect  */
  const selectedBreed = useSelector((state) => state.breed.selectedBreed);
  const selectedAge = useSelector((state) => state.filter.age);
  const selectedSize = useSelector((state) => state.filter.size);
  const selectedLocation = useSelector((state) => state.filter.location);

  const page = useSelector((state) => state.page);

  /*const results = useSelector((state) => state.results);*/

  const results = useSelector(({ filter, results }) => {
    if (filter.keyword === "ALL") {
      console.log(`RETURNING UNFILTERED RESULTS**`);
      return results;
    } else if (filter.keyword !== "ALL") {
      console.log(`Current keyword ${filter.keyword}`);
      const filteredResults = results.filter(function (result) {
        return result.name.toLowerCase().includes(filter.keyword);
      });

      console.log(`Filtered: ` + filteredResults);

      return filteredResults;
    }
  });

  useEffect(() => {
    setLoading(true);
    (async () => {
      const animalResponse = await axios.get(
        `https://api.petfinder.com/v2/animals?&status=adoptable&type=${animalType}&page=${page}&breed=${
          selectedBreed == "ALL" ? "" : selectedBreed
        }&age=${selectedAge == "ALL" ? "" : selectedAge}&size=${
          selectedSize == "ALL" ? "" : selectedSize
        }&${selectedLocation == "ALL" ? "" : "location=" + selectedLocation}`,
        { headers: { Authorization: `Bearer ` + sessionToken } }
      );
      dispatch(setResults(animalResponse.data.animals));
      setLoading(false);
      window.scrollTo(0, 0);
    })();
  }, [page, selectedBreed, selectedAge, selectedSize, selectedLocation]);

  return results.length > 0 ? (
    <Container style={{}}>
      {loading ? (
        <Spinner
          animation="border"
          role="status"
          size="xl"
          style={{
            margin: "auto",
          }}
        />
      ) : (
        <Row xs={1} md={4} className="g-4">
          {results.map((result) => (
            <Col>
              <ResultCard 
                petData={result}
                petName={result.name || "n/a"}
                petBreed={result.breeds.primary || "n/a"}
                petSize={result.size || "n/a"}
                petAge={result.age || "n/a"}
                imgUrl={
                  result.photos[0]?.medium ??
                  `https://mylostpetalert.com/wp-content/themes/mlpa-child/images/nophoto.gif`
                }
              />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  ) : (
    <h2>No results on this page...</h2>
  );
};

export default Results;
