import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addFav, removeFav } from "../actions";
import CurrentForceCast from "./CurrentForceCast";
import Forecast5Days from "./Forecast5Days";

function Forecast() {
  const dispatch = useDispatch();
  const selectedCity = useSelector(state => state.result.selectedResult);
  const favorites = useSelector(state => state.favorites);
  let favoritesText, isFav;
  const currentWeather = useSelector(state => state.search.oneDayForecast[0]);
  isFav = favorites.findIndex(
    city => city.selectedCity.Key === selectedCity.Key
  );
  isFav !== -1 ? (favoritesText = "Remove") : (favoritesText = "Add");
  return (
    <div>
      <Row className="d-flex justify-content-center">
        <Col xs={12} md={6}>
          {/* header */}
          <Row className="d-flex justify-content-between">
            <Col>
              <h4>
                {selectedCity.Country.LocalizedName} -{" "}
                {selectedCity.LocalizedName}
              </h4>
            </Col>
            <Col className="d-flex justify-content-end">
              <Button
                variant="success"
                className="text-size-0 search"
                onClick={() => {
                  isFav !== -1
                    ? dispatch(
                        removeFav({
                          selectedCity,
                          currentWeather
                        })
                      )
                    : dispatch(
                        addFav({
                          selectedCity,
                          currentWeather
                        })
                      );
                }}
              >
                {favoritesText}
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* today forecast */}
      <Row className="d-flex justify-content-center">
        <CurrentForceCast />
      </Row>

      {/* 5 days forecast */}
      <Row>
        <Forecast5Days />
      </Row>
    </div>
  );
}

export default Forecast;
