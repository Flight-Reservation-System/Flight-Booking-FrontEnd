import React from 'react'
import axios from "axios"
import '../styles/registration.css'
import { Navbar, Container, Nav } from 'react-bootstrap'


function Registration() {

    const handleRegister=(e)=>{
        e.preventDefault()
        const data={
            fullName:document.registerform.name.value,
            userName:document.registerform.username.value,
            emailId:document.registerform.email.value,
            phoneNumber:document.registerform.phone.value,
            password:document.registerform.password.value
        }

        axios.post('http://localhost:8080/users/register',data).then((res)=>console.log(res.data))
}


    return (
        <div className="container-fluid">
            <Navbar collapseOnSelect expand="lg">
                <Container style={{ fontFamily: 'Brush Script MT', fontSize: '40px' }}>
                    <Navbar.Brand href="#home"><h1 style={{ fontSize: '90px' }}>FlightiGo</h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link className="home-nav">
                                Home
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="registrationbody" style={{ float: 'right' }}>

                <h1 className="heading">Sign Up</h1>

                <form name="registerform">

                    <input className="register-label" type="text" name="name" placeholder="Full name" /><br />

                    <input className="register-label" type="text" name="username" placeholder="Username" /><br />

                    <input className="register-label" type="email" name="email" placeholder="Email" /><br />

                    <input className="register-label" type="phone" name="phone" placeholder="Phone number" /><br />

                    <input className="register-label" type="password" name="password" placeholder="Password" /> <br />
                </form>
                <div >
                    <button className="button" onClick={handleRegister} >Register</button>
                </div>
            </div>
        </div>
    )

}

export default Registration;