import React, {Component} from 'react';
import { Tab, Col, Container, Nav, Row, Button, Navbar, ButtonGroup, } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contacts from "./Contacts";
import Images from "./Images";
import Quiz from "./Quiz";
import chat from "./screens/chat.PNG";
import HomePage from "./HomePage";
import "../css/Button.css";

class Home extends Component {
    render() {
        return (
            <>
                <Container id="left-tabs-example" className="mt-lg-4" overflow-hidden>
                    <Row>
                        <Col sm={3} className ="d-grid gap-2">
                            <ButtonGroup vertical size="lg block"  variant="primary">
                                <Button href="/"  variant="outline-primary" className="mb-2 mt-lg-1">Home</Button>{' '}
                                <Button href="/contacts"  variant="outline-primary" className="mb-2 mt-lg-1">Mailing</Button>{' '}
                                <Button href="/quiz"  variant="outline-primary" className="mb-2 mt-lg-1">Quiz</Button>{' '}
                                <Button href="/images" variant="outline-primary" className="mb-2 mt-lg-1">Images</Button>{' '}
                            </ButtonGroup>
                            <img
                                src={chat}
                                height="400"
                                width="300"
                                className="d-inline-block align-top mt-lg-5"
                                alt="Chat"
                            />
                        </Col>
                        <Col md-offset={4}>
                            <Router>
                                <div>
                                    <Routes>
                                        <Route path="/"         element={ <HomePage/> } exact/>
                                        <Route path="/contacts" element={ <Contacts/> } exact/>
                                        <Route path="/quiz"     element={ <Quiz/> }     exact/>
                                        <Route path="/images"   element={ <Images/> }   exact/>
                                    </Routes>
                                </div>
                            </Router>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Home;