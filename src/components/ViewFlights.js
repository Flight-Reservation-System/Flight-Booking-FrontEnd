import React, { useEffect, useState } from 'react'
import axios from 'axios'

function ViewFlights() {

    const [flights, setflights] = useState([])
    


    
    useEffect(()=>{
        const url='http://localhost:8080/viewFlight'
        axios.get(url).then((response)=>{
            setflights(response.data)
            console.log(flights)
        })

    },[])


    const deleteFlight=(flightId)=>{
        let url=`http://localhost:8080/deleteFlight/${flightId}`
        axios.delete(url).then(()=>{
            console.log('deleted')
        })
    }


   

    return (
        <div>

            <h1>Flights Scheduled</h1>

            
            {
                flights.map((flight)=>{
                    return(
                        <div className="card" style={{color:"black"}}  >
                            {flight.flightId}<br/>
                            {flight.flightname}<br/>
                            {flight.orgin}{flight.destination}<br/>
                            {flight.date}<br/>
                            {flight.depatureHour}{flight.depatureMinutes}<br/>
                            {flight.arrivalHour}{flight.arrivalMinute}<br/>
                            {flight.price}<br/>
                            <button onClick={deleteFlight(flight.flightId)}>Delete Flight</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ViewFlights
