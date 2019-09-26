import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import history from "./history";
import { selectedResult } from "../actions";
import ReactTooltip from "react-tooltip";

export default function Favorites() {
  const favorites = useSelector(state => state.favorites);
  const dispatch = useDispatch();
  let degSign = `\xB0C`;

  return (
    <Container>
      <Row className="d-flex justify-content-around mt-5">
        {favorites.map((item, i) => {
          return (
            <Col key={i} xs={2}>
              <Card className="text-center" className="results">
                <Card.Title className="text-center">
                  {item.selectedCity.Country.LocalizedName}{" "}
                  {item.selectedCity.LocalizedName}
                </Card.Title>
                <Link
                  to="/"
                  data-id={item.Key}
                  onClick={e => {
                    dispatch(
                      selectedResult(
                        favorites.find(city => city.Key === item.Key)
                          .selectedCity
                      )
                    );
                    history.push("/");
                  }}
                >
                  <Card.Img
                    data-tip
                    data-for={`${i}`}
                    src={require(`../icons/${item.currentWeather.WeatherIcon}.png`)}
                  />
                  <ReactTooltip id={`${i}`} type="light">
                    {item.currentWeather.Temperature.Metric.Value} {degSign}
                  </ReactTooltip>
                </Link>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
