import React from 'react'
import '../styles/addflight.css'
import axios from "axios"

function AddFight() {

    const handleAddFight=(e)=>{
            e.preventDefault()
            
            const data = new FormData(document.getElementById("addFlight"));
            
            const value = Object.fromEntries(data.entries());

            axios.post('http://localhost:8080/addFlight',value).then((response)=>{
                console.log(response.data)
            })

    }

    return (

        
        <div>
            <head>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.min.css" rel="stylesheet" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
                <link rel="stylesheet" href="assets/css/style.css" />
            </head>

            <div class="registration-form">
                <form name="addflightform" id="addFlight">
                    <div style={{textAlign:"center"}}  >
                        <span><h3 >Add Flight</h3></span>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control item" name="flightid" placeholder="Enter Flight id" />
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control item" name="flightname" placeholder="Enter Flight name" />
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control item" name="orgin" placeholder="Orgin" />
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control item" name="destination" placeholder="Destination" />
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control item" name="price" placeholder="cost" />
                    </div>

                    <h6>Date</h6>
                    <div class="form-group">
                        <input type="text" class="form-control item" name="date" placeholder="DD-MM-YYYY" />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h6 style={{ textAlign: "center" }}>Departure</h6>
                                <div class="form-group">
                                    <input type="number" max="24" min="0" class="form-control item" name="departureHour" placeholder="Hour" />
                                    <input type="number" max="60" min="0" class="form-control item" name="departureMinute" placeholder="Minutes" />
                                </div>
                            </div>
                            <div className="col">
                                <h6 style={{ textAlign: "center" }}>Arrival</h6>
                                <div class="form-group">
                                    <input type="number" max="24" min="0" class="form-control item" name="arrivalHour" placeholder="Hour" />
                                    <input type="number" max="60" min="0" class="form-control item" name="arrivalMinute" placeholder="Minutes" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <button type="button" class="btn btn-block create-account" onClick={handleAddFight}>Add Flight</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default AddFight
