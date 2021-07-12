import { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/registration.css'
import { useHistory } from 'react-router-dom';


function Validregister(){
const form = document.getElementById('form');
const[name,setname]=useState("");
const[uname,setuname]=useState("");
const[email,setemail]=useState("");
const[phone,setphone]=useState("");
const[pass,setpass]=useState("");
let history = useHistory();


function handleRegister(e){
    e.preventDefault();
    checkInputs();
    

    if(name!=="" && uname!=="" && email!=="" && phone!=="" && pass!==""){

        const data={
            fullName:name,
            userName:uname,
            emailId:email,
            phoneNumber:phone,
            password:pass
        }

        axios.post('http://localhost:8080/users/register',data).then((res)=>{
        if(res.data==="SUCCESS"){
            history.push("./login")
        }else{
            alert("Failed")
        }
    })
    }
    
}

function checkInputs() {
	
    const fnamevalue =  document.getElementById('fname').value.trim();
	const usernameValue =  document.getElementById('username').value.trim();
	const emailValue = document.getElementById('email').value.trim();
    const numbervalue= document.getElementById('number').value.trim();
	const passwordValue = document.getElementById('password').value.trim();
	


    if(fnamevalue === '') {
		setErrorFor( document.getElementById('fname'), 'Name cannot be blank');
	} else {
		setSuccessFor( document.getElementById('fname'));
        setname(fnamevalue);
	}
	
	if(usernameValue === '') {
		setErrorFor( document.getElementById('username'), 'Username cannot be blank');
	} else {
		setSuccessFor( document.getElementById('username'));
        setuname(usernameValue);
	}
	
	if(emailValue === '') {
		setErrorFor(document.getElementById('email'), 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(document.getElementById('email'), 'Not a valid email');
	} else {
		setSuccessFor(document.getElementById('email'));
        setemail(emailValue);

	}
    if(numbervalue === '') {
		setErrorFor(document.getElementById('number'), 'Phone Numbercannot be blank');
	} else {
		setSuccessFor(document.getElementById('number'));
        setphone(numbervalue);
	}
	
	if(passwordValue === '') {
		setErrorFor(document.getElementById('password'), 'Password cannot be blank');
	} else {
		setSuccessFor(document.getElementById('password'));
        setpass(passwordValue);
	}
	

    
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

return(
            
<div className='noob'>
<div class="container news">
	
	<div class="headers">
		<h2>Create Account</h2>
	</div>
	<form id="form" class="form" name="registerform">
    <div class="form-control">
			<label for="fullname">Name</label>
			<input type="text" placeholder="Your Name" id="fname" />
			<i class="fas fa-check-circle"></i>
			<i class="fas fa-exclamation-circle"></i>
			<small>Error message</small>
		</div>
        
		<div class="form-control">
			<label for="username">Username</label>
			<input type="text" placeholder="flighto" id="username" />
			<i class="fas fa-check-circle"></i>
			<i class="fas fa-exclamation-circle"></i>
			<small>Error message</small>
		</div>
		<div class="form-control">
			<label for="username">Email</label>
			<input type="email" placeholder="flighto@flighto.com" id="email" />
			<i class="fas fa-check-circle"></i>
			<i class="fas fa-exclamation-circle"></i>
			<small>Error message</small>
		</div>
        <div class="form-control">
			<label for="number">Phone</label>
			<input type="text" placeholder="florinpop17" id="number" />
			<i class="fas fa-check-circle"></i>
			<i class="fas fa-exclamation-circle"></i>
			<small>Error message</small>
		</div>
		<div class="form-control">
			<label for="username">Password</label>
			<input type="password" placeholder="Password" id="password"/>
			<i class="fas fa-check-circle"></i>
			<i class="fas fa-exclamation-circle"></i>
			<small>Error message</small>
		</div>
		
		<button  onClick={handleRegister} >Submit</button>
	</form>
</div>
</div>



    );


}
export default Validregister;