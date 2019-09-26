import React from "react";
import { Row, Col } from "react-bootstrap";
import AsyncSelect from "react-select/async";
import { selectedResult, oneDayForecast, fiveDayForecast } from "../actions";
import { useDispatch } from "react-redux";
import { getFiveDayForecast, getForecast, promiseOptions } from "../api";

export default function Search() {
  const dispatch = useDispatch();
  return (
    <div>
      <Row className="d-flex justify-content-center">
        <Col xs={12} md={6} xl={4} className="my-5">
          <div>
            <AsyncSelect
              loadOptions={promiseOptions}
              onChange={result => {
                dispatch(selectedResult(result));
                getForecast(result.Key)
                  .then(oneDay => {
                    dispatch(oneDayForecast(oneDay.data));
                  })
                  .catch(err => console.log(err));

                getFiveDayForecast(result.Key)
                  .then(fiveDay => {
                    dispatch(fiveDayForecast(fiveDay.data));
                  })
                  .catch(err => console.log(err));
              }}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}
