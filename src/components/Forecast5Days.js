import React from "react";
import { Col, Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import ReactTooltip from "react-tooltip";

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

export default function Forecast5Days(props) {
  const forecast = useSelector(state => {
    return {
      days: state.search.fiveDayForecast.DailyForecasts
    };
  });
  let degSign = `\xB0F`;
  return (
    <Col className="d-flex justify-content-sm-around col-12">
      {forecast.days.map((forecast, i) => {
        return (
          <div className="text-center small" key={i}>
            <h3 className="text-size-1">
              {days[new Date(forecast.Date).getDay()]}
            </h3>
            <div className="forecast-image">
              <Image
                data-tip
                data-for={`${i}`}
                src={require(`../icons/${forecast.Day.Icon}.png`)}
                className="mw-100"
              />
              <ReactTooltip id={`${i}`} type="light">
                <span>
                  {forecast.Temperature.Minimum.Value}
                  {degSign} -{forecast.Temperature.Maximum.Value}
                  {degSign}
                </span>
              </ReactTooltip>
            </div>
          </div>
        );
      })}
    </Col>
  );
}
