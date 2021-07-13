import React, { useState } from 'react'
import '../styles/addflight.css'
import axios from "axios"
import NavBar from './NavBar'
import Footer from './Footer'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AddFight() {

    const [depaturedate,setdepaturedate] = useState(new Date())
    const [arrivaldate, setarrivaldate] = useState(new Date())
    const [add, setadd] = useState(0)


    const handleAddFight=(e)=>{
            
            
            const data = new FormData(document.getElementById("addFlight"));
            
            const value = Object.fromEntries(data.entries());

            

            const finalData={...value,arrivalDate:arrivaldate,depatureDate:depaturedate}
           
            console.log(finalData)

            

            axios.post('http://localhost:8080/flight/addFlight',finalData).then((response)=>{
               if(response.data=="SUCCESS"){
                   alert("flight added")
                   setadd(add+1)
               }else{
                   alert("Error!!Check the entered fields")
               }

                
            })

            


    }

    return (

        
        <div>
            <NavBar/>
            

            <div class="registration-form">
                <form name="addflightform" id="addFlight">
                    <div style={{textAlign:"center"}}  >
                        <span><h3 >Add Flight</h3></span>
                        <small>{add} flights added</small>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control item" name="flightId" placeholder="Enter Flight id" />
                    </div>
                    <div class="form-group">
                        <input type="text" className="form-control item" name="flightName" placeholder="Enter Flight name" />
                    </div>
                    <div class="form-group">
                        <input type="text" className="form-control item" name="sourceAirport" placeholder="Orgin" />
                    </div>
                    <div class="form-group">
                        <input type="text" className="form-control item" name="destinationAirport" placeholder="Destination" />
                    </div>
                    <div class="form-group">
                        <input type="text" className="form-control item" name="price" placeholder="cost" />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h6 style={{ textAlign: "center" }}>Departure</h6>
                                <div className="form-group">
                                     <DatePicker className="date" selected={depaturedate} onChange={(depature)=>setdepaturedate(depature)}/><br/><br/>
                                    <input type="number" max="24" min="0" class="form-control item" name="departureHour" placeholder="Hour" />
                                    <input type="number" max="60" min="0" class="form-control item" name="departureMinute" placeholder="Minutes" />
                                </div>
                            </div>
                            <div className="col">
                                <h6 style={{ textAlign: "center" }}>Arrival</h6>
                                <div className="form-group">
                                    <DatePicker className="date" selected={arrivaldate} onChange={(arrival)=>setarrivaldate(arrival)}/><br/><br/>
                                    <input type="number" max="24" min="0" class="form-control item" name="arrivalHour" placeholder="Hour" />
                                    <input type="number" max="60" min="0" class="form-control item" name="arrivalMinute" placeholder="Minutes" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group" style={{textAlign:"center"}}>
                        <button type="button" className="btn btn-block create-account" onClick={handleAddFight}>Add Flight</button>
                    </div>
                </form>

            </div>
            <Footer/>
        </div>
    )
}

export default AddFight
