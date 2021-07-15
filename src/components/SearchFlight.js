import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './NavBar'
import Footer from './Footer'
import Select from 'react-select'
import '../styles/searchflight.css'

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import CarbonFootprint from './CarbonFootprint'




function SearchFlight() {
    const [orgins, setorgins] = useState([])
    const [destinations, setdestinations] = useState([])
    const [orgin, setorgin] = useState('')
    const [destination, setdestination] = useState('')
    const [result, setresult] = useState([])

    useEffect(() => {
        depatureandArrivalOptions()
    }, [])

    async function depatureandArrivalOptions() {
        const res = await axios.get('http://localhost:8080/flight/viewFlight')
        const data = res.data

        const uniqueOrgins=new Array();

        data.forEach(flight => {
            if(uniqueOrgins.includes(flight.sourceAirport)){

            }else{
                uniqueOrgins.push(flight.sourceAirport)
            }

            
        });
        
        const orginAirportOptions = uniqueOrgins.map(airport => (
            {
                "value": airport,
                "label": airport
            }
        ))

        setorgins(orginAirportOptions)


        const uniqueDestinations=new Array();

        data.forEach(flight => {
            if(uniqueDestinations.includes(flight.destinationAirport)){

            }else{
                uniqueDestinations.push(flight.destinationAirport)
            }

            
        });


        const destinationAirportOptions = uniqueDestinations.map(airport => (
            {
                "value": airport,
                "label": airport
            }
        ))

         setdestinations(destinationAirportOptions)


    }

    const handleSearch = () => {
        const url = `http://localhost:8080/flight/searchFlightByDestinationandSource/${destination}/${orgin}`
        axios.get(url).then((response) => {
            
            if(response.data.length===0){
                alert("No Flights on selected routes")
            }else{setresult(response.data)
            }
            
        })

    }

 
      

    return (
        <div >
            <Navbar />
            <br/>
            <div style={{ color: "black" }} className="container row">
                <div className="col"><Select options={orgins} placeholder="From" onChange={(e) => { setorgin(e.value) }} /></div>
                <div className="col"><Select options={destinations} placeholder="To" onChange={(e) => { setdestination(e.value) }} /></div>
                <div className="col "><button className="button"  onClick={handleSearch}>Search</button></div>
                <br/><br/><br/>
                {
                    result.map((flightCo2)=>{
                        const {flight,carbonDioxideEmission}=flightCo2
                        return(
                            <div key={flight.flightId}>
                             <Card className="root" variant="outlined" >
                            <CardContent>
                                <Typography className="title" color="textSecondary" gutterBottom>
                                    {flight.flightName}
                                </Typography>
                                <Typography variant="h5" component="h2">
                                {flight.sourceAirport}  <i class="fas fa-plane"> </i>  {flight.destinationAirport}
                                </Typography>
                                <Typography className="pos" color="textSecondary">
                                    <div className="row rows">
                                    <div className="col"><b>Departs On:  <i class="fas fa-plane-departure"></i></b><br/>{flight.depatureDate} <i class="fas fa-calendar-alt"></i><br/>{flight.departureHour}:{flight.departureMinute}  <i class="fas fa-bell"></i></div>
                                    <div className="col"><b>Arrives On:  <i class="fas fa-plane-arrival"></i></b><br/>{flight.arrivalDate} <i class="fas fa-calendar-alt"></i><br/>{flight.arrivalHour}:{flight.arrivalMinute}  <i class="fas fa-bell"></i></div>
                                    </div>
                                <br/>
                                
                                </Typography>
                                <Typography variant="body2" component="p">
                                    <div className="row rows">
                                   <div className="col"> <em>Booking Charges:</em><b>₹{flight.price}</b></div>
                                   <div className="col">
                                   <CarbonFootprint co2={carbonDioxideEmission} c={carbonDioxideEmission.equivalencies}/>
                                    </div>
                                    </div>
                                    <br />
                                    
                                </Typography>
                            </CardContent>
                            <CardActions>
                            <i class="fas fa-passport"></i> <Button size="small"  > Book Now  </Button>
                            </CardActions>
                            <br/>
                        </Card>
                        </div>
                        
                        )
                    })
                }
                




            </div>

            {/* <Footer/> */}

        </div>
    )
}

export default SearchFlight
