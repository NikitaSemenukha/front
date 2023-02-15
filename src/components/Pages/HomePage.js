import React, { Component } from 'react';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import main from './screens/main.PNG';
import graph from './screens/graph.PNG';
import barChart from './screens/barChart.PNG';
import "./Style.css";

class HomePage extends Component {
    render() {
        return (
            <>
                <div className="box">
                    <Row className="containerPadding">
                        <Col sm={3}>
                            <h1 color="black">ALIQUIM PASST</h1>
                            <p>
                                Morbi pretium rhoncus magna at venenatis. Class aptent taciti sociosqu ad litora torquent per conubia nostra
                            </p>
                        </Col>
                        <Col sm={9}>
                            <img
                                src={main}
                                height="300"
                                width="715"
                                className="d-inline-block align-top"
                                alt="Main"
                            />
                        </Col>
                    </Row>
                    <Container className="mt-lg-4">
                        <Row>
                            <Col sm={3} className="containerLine containerColor">
                                <h3>SCATTERPLOT</h3>
                            </Col>
                            <Col sm={3} className="containerLine">
                                <h3>Cras Facilities</h3>
                            </Col>
                            <Col sm={3} className="containerLine containerColor">
                                <h3>Bar Chart</h3>
                            </Col>
                            <Col sm={3} className="containerLine">
                                <h3>SED PLACERT</h3>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm={3} className="containerLine">
                                <img
                                    src={graph}
                                    height="150"
                                    width="150"
                                    className="d-inline-block align-top"
                                    alt="Logo"
                                />
                            </Col>
                            <Col sm={3} className="containerLine containerColor">
                                <p>Some text</p>
                            </Col>
                            <Col sm={3} className="containerLine">
                                <img
                                    src={barChart}
                                    height="150"
                                    width="150"
                                    className="d-inline-block align-top"
                                    alt="Logo"
                                />
                            </Col>
                            <Col sm={3} className="containerLine containerColor">
                                <p>Some text</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        );
    }
}

export default HomePage;