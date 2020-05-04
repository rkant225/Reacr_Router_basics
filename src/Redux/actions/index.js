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