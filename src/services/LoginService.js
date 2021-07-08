

const LoginService=(username,password)=>{
    //code for checking password with db
    let orgpassword='admin'
    if(orgpassword===password){
        return true;
    }else{
        return false
    }
    
}

export default LoginService