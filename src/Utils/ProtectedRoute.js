import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const ProtectedRoute = (props) =>{
    const {componentToRender : Component, isAuthanticated, ...rest} = props;
    return <Route {...rest} render={(myProps)=>{
        return isAuthanticated ? <Component {...myProps}/> : <Redirect to={{pathname : "/login", state : {from : myProps.location }}}/>
    }}/>
}

export default ProtectedRoute;