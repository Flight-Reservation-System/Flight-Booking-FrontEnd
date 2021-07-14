import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'
import '../styles/viewflights.css'
import Navbar from './NavBar'

function ViewFlights() {

    const [flights, setflights] = useState([])

    const refreshList=()=>{
        const url = 'http://localhost:8080/flight/viewFlight'
        axios.get(url).then((response) => {
            setflights(response.data)
        })
    }


   useEffect(()=>{
       refreshList()
   },[])


    const deleteFlight = (e) => {

        let flightId = e.target.value
        let confirm=window.confirm("are you sure?")
        if(confirm){
            let url = `http://localhost:8080/flight/deleteFlight/${flightId}`
            axios.delete(url).then((res) => {
            refreshList()
        })
        }else{
            alert("Delete Cancelled")
        }
       

        
        
        
    }




    return (
        <div >
            <Navbar/>

            <h1>Flights Scheduled</h1>

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>FlightId</th>
                        <th>Flight Name</th>
                        <th>Orgin</th>
                        <th>Destination</th>
                        <th>Departure<br/>
                        <div className="datetime">YYYY-MM-DD</div></th>
                        <th>Arrival<br/>
                        <div className="datetime">YYYY-MM-DD</div></th>
                        <th>Price</th>
                        <th>----</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        flights.map((flight)=>{
                            return(
                                <tr key={flight.flightId}>
                                <td>{flight.flightId}</td>
                                <td>{flight.flightName}</td>
                                <td>{flight.sourceAirport}</td>
                                <td>{flight.destinationAirport}</td>
                                <td>
                                    {flight.depatureDate}<br/>
                                    {flight.departureHour}:{flight.departureMinute}
                                </td>
                                <td>
                                {flight.arrivalDate}<br/>
                                    {flight.arrivalHour}:{flight.arrivalMinute}</td>
                                <td>{flight.price}</td>
                                <td> <button className="danger" value={flight.flightId} onClick={deleteFlight}>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>

    </div>
        
    )
}

export default ViewFlights
