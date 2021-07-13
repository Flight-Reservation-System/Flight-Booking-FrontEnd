import React from 'react'
import Footer from './Footer'

import NavBar from "./NavBar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddFlights from './AddFlights';
import ViewFlights from './ViewFlights';

import Booking from './Booking'
import HeroSection from './HeroSection';


function MainMenu() {
    
    return (
       

           <>
    <NavBar/>
    <HeroSection/>
    <Footer/>

        </>
           
       
    );
}

export default MainMenu


/*<>
< >
<NavBar/>
<Router >

<Switch>
<Route path = '/'exact component = {HeroSection}/> 
<Route path = '/addFlights' component = { AddFlights }/> 
<Route path = '/viewFlights'component = { ViewFlights }/> 
<Route path = '/bookFlights' component = { Booking }/> 
</Switch>

</Router>
<Footer/> 

</>
</>*/