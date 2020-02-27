import React, { Component } from 'react';
import { Button, Col, Row, Container, Tooltip, OverlayTrigger} from 'react-bootstrap';

class Distances extends Component {
      
    showClimbingOptions = () => {
        // displays number of activities within search radius.

        // TESTS
                // console.log('climbSpots', climbSpots)
                // console.log(this.props.stateprop.climbs)
                // console.log(this.props.stateprop.climbs, 'Climbs Handler')

        // {need to set a conditional statement to give a message if there are no craigs in the area
        // or one that states if the craigs are outside of the US.
        if(this.props.stateprop.infoReady){
            return (                
                <div>
                <h2>{this.props.stateprop.craigs.length}</h2> 
                <h4>Climbing Spots within a 200 mile Radius</h4>

                {this.showClimbingInfo()}
                {this.showClimbButton()}

                </div>  
            ) 
        } 
    }

    showClimbButton = () =>{
        if( (this.props.stateprop.climbs === false) && (this.props.stateprop.infoReady === true)){
            return (
                <Button variant="warning" onClick={(e) => {this.props.loadClimbHandler(e);}} > 
                Load Climbing Areas 
                </Button>
            )
        }
    }

    showClimbingInfo = () => {
        // columns that autofit and collapse when called upon. Info is spread from array and generated dynamically:
        let climbVerifyer = this.props.stateprop.climbs;
        let climbSpots = this.props.stateprop.craigs;

        if(climbVerifyer){
            return climbSpots.map((eachClimb, i) => {
                return (
                    <Container id="climbCard" key={eachClimb.id} >
                    <Row>
                        <Col id="climbCardDetail" sm={8}>
                            <h3>{eachClimb.name}</h3>
                            </Col>
                        <Col id="climbCardDetail" sm={4}>
                            <h5>
                            Type: {eachClimb.type} </h5>
                            </Col>
                    </Row>
                        <Row>
                        <Col id="climbCardDetail" >
                            <h5>
                            Location: {eachClimb.location[0]} | {eachClimb.location[1]} </h5>
                            </Col>
                    </Row>
                    <Row>
                        <Col sm id="climbCardDetail">
                            <h4> 
                            Difficulty: {eachClimb.rating} </h4> </Col>
                        <Col sm id="climbCardDetail">
                            <h4>
                            Rating: {eachClimb.stars}/5 </h4></Col>
                        <Col sm id="climbCardDetail">
                            <h5> <a href='{eachClimb.url}' >
                            Link </a> </h5></Col>
                    </Row>
                    </Container>
                    )
            })           
        }
    }

    showDivingInfo = () => {
        let diveVerifyer = this.props.stateprop.dives;
        let diveSpots = this.props.stateprop.divingSpots;

        if(diveVerifyer){
            return diveSpots.map((eachDive, i) =>{
                return (
                    <Container id="diveCard" key="{eachDive.id}">
                        <Row>
                            <Col sm={12} id="diveCardDetail" >
                            <h4>{eachDive.name}</h4></Col>
                            </Row>
                        <Row>
                            <Col id="diveCardDetail">
                                <h5>  
                                Latitude: {eachDive.lat} </h5></Col>
                            <Col id="diveCardDetail">
                                <h5>
                                Longitude: {eachDive.lng} </h5></Col>
                            </Row>
                        <Row>
                            <Col sm id="diveCardDetail"> 
                                <OverlayTrigger
                                    overlay={
                                        <Tooltip id="nauticalMiles">
                                        <strong>{eachDive.distance *1.1}</strong> miles. 
                                        </Tooltip>
                                                }>
                                    <h5>Distance: {eachDive.distance} Nautical Miles </h5>
                                    </OverlayTrigger>
                                
                                </Col>
                            <Col sm id="diveCardDetail">
                                <h5>
                                Dive ID: {eachDive.id} </h5></Col>
                            </Row>
                    </Container>
                )
            })
        }
    }

    showDivingOptions=() =>{
        if(this.props.stateprop.infoReady){
            return (                
                <div>
                <h2>{this.props.stateprop.divingSpots.length}</h2> 
                <h4>Diving Spots within a 50 mile Radius</h4>

                {this.showDivingInfo()}
                {this.showDiveButton()}
                </div>  
            ) 
        } 
    }
    
    showDiveButton = () =>{

        // loadDiveHandler

        if( (this.props.stateprop.dives === false) && (this.props.stateprop.infoReady === true)){
            return (
                <Button variant="primary" onClick={(e) => {this.props.loadDiveHandler(e);}}>
                    Load Diving Sites
                    </Button>
            )
        } 
    }
           
    render() {
        return(
            <> 
                {this.showClimbingOptions()}
                {this.showDivingOptions()}
            </>
            )
        };
    }


export default Distances;

