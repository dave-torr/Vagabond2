import React, { Component } from 'react';
import { Button, Container, Row, Col, } from 'react-bootstrap';
import { Link, } from 'react-router-dom';


class Intro extends Component {

    introFunction = () => {
        // Appear Logo, brough to you by, and ripples mouse over animation
        if(this.props.stateprop.introState){
            return (
                <>
                    <h3>AVENTURIER FLORIDA</h3>
                    {/* LOGO: Centered
                    Get started Button that changes state (function is called from App.js) */}
                    <Button id="homeButtons" variant="outline-dark" onClick={(e) => {this.props.introHandler(e);}} >
                        Get Started
                        </Button>
                        <br></br>
                        {/* further functionality: Sign in and About */}
                        
                     {/* <Button id="homeButtons" variant="outline-dark">
                        Sign Up/In
                        </Button>
                        <br></br> */}

                    <Button id="homeButtons" variant="outline-dark">
                        About
                        </Button> 

                    <div id="BroughBy">
                        <h6  >Brought to you by:</h6>
                            <Link id="homelink" to='https://locationiq.com/'> <p>  LOCATION IQ</p> </Link>
                            <Link id="homelink" to='https://www.mountainproject.com/'> <p>  MOUNTAIN PROJECT </p> </Link>
                            <Link id="homelink" to='http://divesites.com/'> <p> DIVESITES.COM</p> </Link>
                            <Link id="homelink" to='https://www.ironhack.com/'> <p> IRONHACK</p> </Link>
                        </div>
                </>
                )
            } 
        }

    introText = () =>{
        let introstate = this.props.stateprop.introState
        let infocallverifyer = this.props.stateprop.infoReady

        if((introstate === false) && (infocallverifyer === false)){
            return (
                <Container  id="introText">
                    <Row>
                        <Col md={4} id="introTitles"> 
                            Your next adventure -> </Col>
                        <Col md={{ span: 4, offset: 3 }} id="introTitles">
                            starts here |</Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 4, offset: 2 }}>
                            1 - pick a city from the dropdown below</Col>
                        <Col md={{ span: 3, offset: 3 }}>
                            2- find the closest climbing or diving spots to your city</Col>
                    </Row>
                    <Row>
                    
                        <Col md={{ span: 6, offset: 3 }}> 
                            <strong>Pro-Tip:</strong> Sign in to check off completed climbs/dives, see your dive and climb log, and leave comments on your outings, </Col>
                    </Row>
                </Container>
            )
        }
    }

    render() {
        return (
            <div>
                {this.introText()}
                {this.introFunction()}

            </div>
        );
    }
}

export default Intro;