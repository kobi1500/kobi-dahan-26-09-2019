import React, { Component } from 'react';
import {  Container } from 'react-bootstrap';
import Search from './Search';
import Forecast from './Forecast';
class Main extends Component {
    render() {
        return (
            // Search Field
                <Container fluid={true} className="d-flex justify-content-center ">
                    <div className="col-md-8 border border-primary mt-3 p-3">
                        <Search />
                        <Forecast className="forecast-page"/>
                    </div>
                </Container>
                )
            }
        }
        
        export default Main
