import React,{useState} from 'react'
import LoginService from '../services/LoginService'
import '../styles/loginstyle.css'
import { useHistory } from 'react-router-dom';



function Login() {

    let history = useHistory();

    const [status, setstatus] = useState(true)

    
    return (
        <div  className="body">
            <h1 className="header">Login</h1>
            <form name="loginform">
                <label>Username:</label>
                <input type="text" name="username"/><br/><br/>
                <label>Password:</label>
                <input type="password" name="password"/><br/><br/>
                <button>LogIn</button>

            </form>
            
        </div>
    )
}

export default Login
