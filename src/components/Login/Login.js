import React from 'react';
import {connect} from 'react-redux';
import * as Actions from '../../Redux/actions';

import {Field, reduxForm} from 'redux-form';

class Login extends React.Component {

    onSubmit = (formData) =>{
        const {from} = this.props.location.state || { from: { pathname: "/" } };
        this.props.LoginAction(formData, from);
    }

  render(){
    return (
        <div style={{textAlign : "center"}}>
            {this.props.error && <h3 style={{color : "red"}}>{this.props.error}</h3>}
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                User name : <Field name="userName" component="input" validate={[]}/>
                <br/>
                Password : <Field name="password" component="input" validate={[]}/>
                <br/>
                <button type={'submit'}>Login</button>
            </form>
        </div>
    );
  }  
}

const mapStateToProps = (state) =>{
    return{
        isLoggedIn : state.AuthReducer.isLoggedIn,
        error : state.AuthReducer.error
    }
}



export default reduxForm({form : "loginForm"})(connect(mapStateToProps, {LoginAction : Actions.Login})(Login));
