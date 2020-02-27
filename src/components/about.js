import React, { Component } from 'react';


class About extends Component {

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

            {this.aboutFunction()}

                {/* {this.vrtester()} */}
            </div>
        );
    }
}

export default About;