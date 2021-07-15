import React from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import '../styles/carbon.css'

function CarbonFootprint(props) {
    
    return (
        <div className="c02" >
            <Popup trigger={<div onMouseOver={(e)=>{e.target.className="red"}} onMouseOut={(e)=>e.target.className=""}> <i class="fas fa-shoe-prints"></i><b> {props.co2.value}</b> of CO2/{props.co2.unit} trip</div>}
            modal nested >
                <div className="row main">
                    {
                        props.c.map((e)=>{
                            return(
                               
                                <div className="col">
                                    <div className="row value" >{e.value}</div>
                                    <div className="row">{e.description}</div>
                                </div>
                                    
                                
                            )
                        })
                    }

                </div>
            </Popup>

        </div>
    )
}

export default CarbonFootprint
