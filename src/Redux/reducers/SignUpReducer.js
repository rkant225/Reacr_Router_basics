
const initialState = {error : "", successMessage : ""}

const SignUpReducer =(state=initialState, action)=>{
    switch(action.type){
        case 'SIGNUP_SUCCESS':
            return{
                ...state,
                successMessage : action.payload.successMessage,
                error : ""
            }
        case 'SIGNUP_ERROR':
            return{
                ...state,
                successMessage : "",
                error : action.payload.error
            }
        case 'SIGNUP_RESET_STATE':
            return{
                ...state,
                successMessage : "",
                error : ""
            }
        default :
            return state;
    }
}

export default SignUpReducer;