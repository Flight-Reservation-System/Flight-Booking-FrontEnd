import React from 'react';
import '../styles/Cards.css';
import CardItem from './CardItem';


function Cards() {
    return ( <div className = 'cards' >
        <h1 > Check out these EPIC Destinations! </h1> 
		<div className = 'cards__container' >
        <div className = 'cards__wrapper' >
        <ul className = 'cards__items' >
        <CardItem src = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mata-atlantica-atlantic-forest-in-brazil-royalty-free-image-935746242-1567619461.jpg'
        text = 'Explore the hidden waterfall deep inside the Amazon Jungle'
        label = 'Adventure'
        path = '/viewFlights' />
        <CardItem src = 'https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2017/04/shutterstock_518868568-pr-250417-Stone-arch-over-the-sea-at-the-rocky-coastline-on-Nusa-Penida-island-near-Bali-in-Indonesia.jpg'
        text = 'Travel through the Islands of Bali in a Private Cruise'
        label = 'Luxury'
        path = '/viewFlights' />
        </ul>
		<ul className = 'cards__items' >
        <CardItem src = 'https://i.ytimg.com/vi/0_xGFCyVKN4/maxresdefault.jpg'
        text = 'Set Sail in the Atlantic Ocean visiting Uncharted Waters'
        label = 'Adrenaline'
        path = '/viewFlights' />
        <CardItem src = 'https://blog.akbartravels.com/wp-content/uploads/2020/04/shutterstock_1671444598.jpg'
        text = 'For enchanting mountainous scenes and quaint villages oozing storybook charm, pay a visit to Manali'
        label = 'Adventure'
        path = '/viewFlights' />
        <CardItem src = 'https://saharadeserttour.com/wp-content/uploads/2020/12/saharadesertour_1-e1606936712182.jpeg'
        text = 'Ride through the Sahara Desert on a guided camel tour'
        label = 'Safari'
        path = '/viewFlights'/>
        </ul> 
		</div> 
		</div>
		 </div>
    );
}


export default Cards;