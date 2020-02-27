import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './components/intro'
import Home from './components/home'
import Distances from './components/distances'
import axios from 'axios';
import Logo from './assets/Logos/logopink.png'
import About from './components/about';
// import { Route, } from 'react-router-dom';


class App extends Component {  

  state = {
    introState: true,
    infoReady: false,
    climbs: false,
    dives: false,
    departurecity: " ",
    distance: 200,
  }

  introHandler = (e) => {
      this.setState({
        introState: false
      })
  }

  inputForms = (e) =>{
      // checks on form information.
      // TEST for input forms console.log(e.target.value)
      this.setState({
        departurecity: e.target.value, 
      }, ()=> this.findlatLongCraigs())
  }

  findlatLongCraigs = async () =>{
          // TEST 1 console.log(this.state.departurecity)
            // Gives Lat and Lon coordinates for cities
            let res = await axios.get(`https://us1.locationiq.com/v1/search.php?key=44cca3ad956a60&q=${(this.state.departurecity)}&format=json`).catch(err => console.log(err))

                var Latitude = res.data[0].lat
                var Longitude = res.data[0].lon

         // TEST 2 console.log(Longitude, Latitude)

    // CLIMBING SITES WITHIN 200 Mile radius
    //  Gives climbing information according to previously given coordinates 
    let res2 = await axios.get(`https://cors-anywhere.herokuapp.com/https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=${(Latitude)}&lon=${(Longitude)}&maxDistance=${(this.state.distance)}&key=200692140-3dd94cc47288e1ac5e8b8bd64d1f104e`).catch(err => console.log(err))

        // Sets state of app, adding lat and lon. Distance of climbing spots measurement is always 200 for florida.
        this.setState({
              craigs: res2.data.routes,
              Latitude, 
              Longitude,
              climbingSpots: res2.data.routes.length
          })

    // DIVE SITES WITHIN A CERTAIN DISTANCE 
    // (distance is measured in nautical miles which is 1.15 miles, or 1.8 km)
    let res3 = await axios.get(`https://cors-anywhere.herokuapp.com/http://api.divesites.com/?mode=sites&lat=${(Latitude)}&lng=${(Longitude)}&dist=50`).catch(err => console.log(err))
  
        // TEST 3 console.log(res3.data.sites)

        // sets diving state and sites. the true statement, means all info has loaded.
        // how to console.log an error? having a climbing true and diving, true condition??
        this.setState({
            divingSpots: res3.data.sites,
            infoReady: true,
          })

  }

  loadClimbHandler = (e) => {
    this.setState({
      climbs: true
    })
  }

  loadDiveHandler = (e) => {
    this.setState({
      dives: true
    })
  }

  render() {  
    return (
      <>

        {console.log(this.state.introState, 'IntroState')}
        {console.log(this.state.infoReady, 'infoReady')}
        <div className="App" >
        <div>
        <img id="generalLogo" alt="Logo" src={Logo} />
        </div> 

            <Intro
              stateprop={this.state}
              introHandler={this.introHandler}
              />

            <Home
                inputDropdown={this.inputForms}
                stateprop={this.state}
                findlatLongCraigs={this.findlatLongCraigs}
              /> 

            <About />
         
            <Distances 
                inputDropdown={this.inputForms}
                distancepicker={this.distancepicker}
                stateprop={this.state}
                findlatLongCraigs={this.findlatLongCraigs}
                loadClimbHandler={this.loadClimbHandler}
                loadDiveHandler={this.loadDiveHandler}
              />  
          </div>
      </>
  ); }
}

export default App;
