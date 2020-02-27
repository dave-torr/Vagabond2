import React, { Component } from 'react';
// import {Switch, Route, Link} from 'react-router-dom';
import { Form, Container, Row, Col, Modal, Spinner, Button, } from 'react-bootstrap';
// import { Link, } from 'react-router-dom';

// import axios from 'axios';

class Home extends Component {

    state={
        modal: false,
    }

    modalTrigger = () =>{
        this.setState({
            modal: true,
        })
    }

    modalTriggerOFF = () =>{
        this.setState({
            modal: false,
        })
    }

    loadingSpinners = () =>{
        if(this.props.stateprop.infoReady === false){
            return (
                <>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}  >
                        <Spinner animation="border" variant="secondary" />
                        <Spinner animation="border" variant="success" />
                        <Spinner animation="border" variant="danger" />
                        <Spinner animation="border" variant="warning" />
                        <Spinner animation="border" variant="info" />
                        <Spinner animation="border" variant="dark" />
                        </Col>
                    </Row>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        loading adventures...
                            </Col>
                    </Row>

                </>
            )
        } if (this.props.stateprop.infoReady === true){
            return (
                <>
                <h4>your adventures are ready</h4>
                    <Modal.Footer >
                        <Button onClick={this.modalTriggerOFF}>explore</Button>
                        </Modal.Footer>
                    </>
            )
        }
    }

    loadModal = () =>{
        if(this.state.modal=== true){
        return (
           <>
                <Modal 
                    size="lg" 
                    aria-labelledby="contained-modal-title-vcenter" 
                    centered 
                    show={this.state.modal}
                    id='loadingModal'
                    >
                    <Modal.Header >
                        <Modal.Title id="contained-modal-title-vcenter">
                            a v e n t u r i e r . f l
                        </Modal.Title>
                        </Modal.Header>
                    <Modal.Body >
                        {this.loadingSpinners()}
                        </Modal.Body>
                </Modal>
            </>
            )
        }
    }

    formFunction = () =>{
        if(this.props.stateprop.introState === false){
            return (
                <Container>
                    <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <Form  onChange={(e) => { this.props.inputDropdown(e);  this.modalTrigger()}}>
                            <Form.Group controlId="exampleForm.ControlSelect1" >
                            <br></br>
                            <Form.Control name="city" as="select"  >
                                <option>Pick Your Departure City...</option>
                                <option>Miami</option>
                                <option>Orlando</option>
                                <option>Fort Lauderdale</option>
                                <option>Tampa</option>
                                <option>Jacksonville</option>
                                <option>Pensacola</option>
                                <option>Sarasota</option>
                                <option>Punta Gorda</option>
                                <option>Panama City Beach</option>
                                <option>Key West</option>
                                <option>Tallahassee</option>
                                <option>Daytona Beach</option>
                            </Form.Control>
                            </Form.Group>
                        </Form>
                        </Col>
                    </Row>
                </Container>
            )
        }               
    }

    render() {
        return (
            <div>
                {this.formFunction()}
                {this.loadModal()}
            </div>
        );
    }
}

export default Home;