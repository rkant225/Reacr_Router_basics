import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import SignUpReducer from './SignUpReducer';
import {reducer as FormReducer} from 'redux-form';


export default combineReducers({
    AuthReducer : AuthReducer,
    SignUpReducer: SignUpReducer,
    form : FormReducer
})