import axios from 'axios';
import history from '../../Utils/History';

export const Login = (loginDetails, redirectTo) =>{
    return async (dispatch)=>{
        const response = await axios.get('http://localhost:3001/users');
        const existingUsers = response.data;
        const currentUser = existingUsers.find(user => user.userName === loginDetails.userName && user.password === loginDetails.password);

        if(currentUser){
            dispatch({ type : 'LOGIN', payload : {isLoggedIn : true, error : ""} })
            history.push(redirectTo.pathname);
        }
        else{
            dispatch({ type : 'LOGIN', payload : {isLoggedIn : false, error : "There is mismatch in your credentials. :("} })
        }
    }
}

export const LogOut = () =>{
    return {type : "LOGOUT"}
}

export const ResetSignupState =()=>{
    return{type : 'SIGNUP_RESET_STATE'}
}

export const SignUp = (signUpDetails) =>{    
    return async (dispatch)=>{
        const response = await axios.get('http://localhost:3001/users');
        const existingUsers = response.data;
        const userFound = existingUsers.find(user => user.userName === signUpDetails.userName);

        if(userFound){
            console.log('already Exist')
            dispatch({ type : 'SIGNUP_ERROR', payload : {error : "User alreeady exists. :("}})
        }
        else{
            console.log('OKKK')
            await axios.post('http://localhost:3001/users', signUpDetails);
            dispatch({ type : 'SIGNUP_SUCCESS', payload : {successMessage : "User created successfully. You will be redirected to login page."}})
            setTimeout(()=> history.push("/login"), 3000);
        }
    }
}