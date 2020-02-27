import React, { Component } from 'react';
import { Button, Container, Row, Col, } from 'react-bootstrap';

// About functionality is messing up with the general layout of the site. 
// Line 28. Might need to move around rendering of componenets since some are mutually dependent, and create a mess when moving around.

class Intro extends Component {

    introFunction = () => {
        // Appear Logo, brough to you by, and ripples mouse over animation
        if(this.props.stateprop.introState){
            return (
                <>
                    <h3>AVENTURIER FLORIDA</h3>
                    {/* LOGO: Centered
                    Get started Button that changes state (function is called from App.js) */}
                    <Button id="homeButtons" variant="outline-dark" onClick={(e) => {this.props.introHandler(e); this.props.aboutCloser(e);}} >
                        Get Started
                        </Button>
                        <br></br>
                        {/* further functionality: Sign in and About */}
                        
                     {/* <Button id="homeButtons" variant="outline-dark">
                        Sign Up/In
                        </Button>
                        <br></br> */}

                    {/* <Button id="homeButtons" variant="outline-dark" onClick={(e) => {this.props.aboutHandler(e);}} >
                        About
                        </Button>  */}

                    <div id="BroughBy">
                        <h6  >Brought to you by:</h6>
                            <a id="homelink" href='https://locationiq.com/'> <p>  LOCATION IQ</p> </a>
                            <a id="homelink" href='https://www.mountainproject.com/'> <p>  MOUNTAIN PROJECT </p> </a>
                            <a id="homelink" href='http://divesites.com/'> <p> DIVESITES.COM</p> </a>
                            <a id="homelink" href='https://www.ironhack.com/'> <p> IRONHACK</p> </a>
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
                            1 - Pick a city from the dropdown below</Col>
                        <Col md={{ span: 3, offset: 3 }}>
                            2 - Find the closest climbing or diving spots to your city.</Col>
                        </Row>
                    {/* <Row>
                            <Col md={{ span: 6, offset: 3 }}> 
                            <strong>Pro-Tip:</strong> Sign in to check off completed climbs/dives, see your dive and climb log, and leave comments on your outings </Col>
                            </Row> */}
                </Container>
            )
        }
    }

    aboutFunction = () =>{
        if(this.props.stateprop.aboutState === true){
            return (
                <>
                <div id='aboutText'>
                <p> 
                AVENTURIER.FL
                </p>
                <p>is a small web app created as a test for API integration, within the REACT environment.
                    </p>
                <p>Open source APIs used in this application are the following:</p>
                <ul>
                    <li>LOCATION IQ: Latitudes and Longitudes for any given location in the world </li>
                    <li>MOUNTIAN PROJECT: Rock Climbing sites and information </li>
                    <li>DIVESITES: Diving locations and information </li>

                </ul>

                </div>
                </>
            )
        }
    }

    render() {
        return (
            <div>
                {this.introText()}
                {this.introFunction()}
                {/* {this.aboutFunction()} */}

            </div>
        );
    }
}

export default Intro;