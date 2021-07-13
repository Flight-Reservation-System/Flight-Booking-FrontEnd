import React from 'react';
import '../App.css';
import { Button } from './Button';
import '../styles/HeroSection.css';
import Footer from './Footer';
import Cards from './Cards'

function HeroSection() {
    return ( < > < div className = 'hero-container' >
    
        < h1 > A world to explore </h1>  
        <p > Modern corporate travel management
        for the fast - changing travel landscape </p>  
        < div className = 'hero-btns' >
        <Button className = 'btns'
        buttonStyle = 'btn--outline'
        buttonSize = 'btn--large' >
        GET STARTED </Button>  
        <Button className = 'btns'
        buttonStyle = 'btn--primary'
        buttonSize = 'btn--large'>
        Watch a Demo < i className = 'far fa-play-circle'/>
        </Button>  
        
        </div> 
        
        </div> 
        <Cards/>
      
        </>
    )
}

export default HeroSection