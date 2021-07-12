import React, { useState } from 'react'
import '../styles/loginstyle.css'
import { useHistory } from 'react-router-dom';
import axios from 'axios';



function Login() {
    
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [userErr,setUserErr]=useState(false);
    const [PassErr,setPassErr]=useState(false);
   
    let history = useHistory();

    const handleUsername=event =>{
         
        if(event.target.value.length<5){
            setUserErr(true);
        }else{
            setUserErr(false);
            setUsername(event.target.value); 
        }
         
    }

    const handlePassword=event =>{

        if(event.target.value.length<5){

            setPassErr(true);
        }else{
            setPassErr(false);
            setPassword(event.target.value);
        } 
    }
   

    const handleClick = (e) => {
        e.preventDefault()
        const data = {

            userName: username,
            password: password
        }

        
       if((username !== "" || password !== "")){

        axios.post('http://localhost:8080/users/login', data).then((res) => {
            if (res.data) {
                
                history.push("./mainMenu");
            } else {
                alert("Invalid username or password");
            }
            console.log(res.data)
        })

    }if(username===""){
        alert('Please Provide username');
    }else if(password===""){
        alert('Please Provide Password');
    }

    }
        
   

    return (
        <div>
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Fullscreen Responsive Login Page</title>

            </head>
            <section>
                <div class="imgBx">
                    <img src="https://ae01.alicdn.com/kf/HTB1B5lWNXXXXXafapXXq6xXFXXXA/Retro-World-War-II-fighter-Airplane-propeller-Movie-posters-vintage-print-Paper-Paint-Wall-HD-Crafts.jpg" />
                </div>
                <div class="contentBx"  >
                    <div class="formBx" >
                        <h2>Login</h2>
                        <form name="loginfrom">
                            <div class="inputBx">
                                <span>Username</span>
                                <input type="text" name="username" onChange={handleUsername} />{userErr?<div class='mesg'> <span style={{fontFamily: 'Brush Script MT',margin:'0px'}}>-Too Short..!</span></div> :""}
                            </div>
                            <div class="inputBx">
                                <span>Password</span>
                                <input type="Password" name="password" onChange={handlePassword} /> {PassErr?<span style={{fontFamily: 'Brush Script MT',margin:'0px'}}>-Too Short..!</span>:""}
                            </div>
                            <div class="remember">
                                <label><input type="checkbox" name="" />Remember me</label>
                            </div>
                            <div class="inputBx">
                                <input type="submit" value="Sign in" onClick={handleClick} />
                            </div>
                            <div class="inputBx">
                                <p>Don't have an account?<a href="/register">Sign up</a>
                                </p>
                            </div>
                        </form>
                      
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Login
