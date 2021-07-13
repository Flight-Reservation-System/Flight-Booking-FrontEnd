import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import '../styles/navbar.css'



function Navbar() {
    const [click, setClick] = useState(false);

    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    let history = useHistory();

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };
    useEffect(() => {
        showButton();
    }, []);
    window.addEventListener('resize', showButton);

    return ( < >
        <
nav className = "navbar active" >
        <div className = "navbar-container-fluid flight">
        <Link to = "/mainMenu"
        className = "navbar-logo"
        onClick = { closeMobileMenu } >
        FlightiGO < i className = 'fab fa-typo3'/>
        </Link> 
         <div className = "menu-icon"
        onClick = { handleClick } >
        <i className = { click ? 'fas fa-times' : 'fas fa-bars' }/> 
         </div > 
        < ul className = { click ? 'nav-menu active' : 'nav-menu' } >

        <li className = 'nav-item' >

        <Link to = '/AddFlights'
        className = 'nav-links'
        onCLick = { closeMobileMenu } > Add Flights </Link>  </li >
        <li className = 'nav-item' >

        < Link to = '/ViewFlights'
        className = 'nav-links'
        onCLick = { closeMobileMenu } > View Flights </Link>  </li>
         <li className = 'nav-item' >

        <Link to = '/searchFlights'
        className = 'nav-links'
        onCLick = { closeMobileMenu } > Search Flights </Link>  </li > 
        < li className = 'nav-item' >

        <Link to = '/BookFlights'
        className = 'nav-links-mobile'
        onCLick = { closeMobileMenu } > Book Flights </Link> </li >
        < li className = 'nav-item' >

        <Link to = '/'
        className = 'nav-links'
        onCLick = { closeMobileMenu } > Logout </Link>  
        </li > 
         </ul>   </div>

        </nav>  </>
    )
}

export default Navbar