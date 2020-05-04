import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import {reducer as FormReducer} from 'redux-form';


export default combineReducers({
    AuthReducer : AuthReducer,
    form : FormReducer
})