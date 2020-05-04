
const initialState = {isLoggedIn : false, error : ""}

const AurhReducer =(state=initialState, action)=>{
    switch(action.type){
        case 'LOGIN':
            return{
                ...state,
                isLoggedIn : action.payload.isLoggedIn,
                error : action.payload.error
            }
        case 'LOGOUT':
            return{
                ...state,
                isLoggedIn : false,
                error : ""
            }
        default :
            return state;
    }
}

export default AurhReducer;