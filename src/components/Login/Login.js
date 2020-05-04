import React from 'react';
import {connect} from 'react-redux';
import * as Actions from '../../Redux/actions';
import styles from './Login.module.css';
import {Field, reduxForm} from 'redux-form';

class Login extends React.Component {

    RenderInput =(props)=>{
        return (
            <div className={styles.field}>
                <div className={styles.label}>
                    <label>{props.label}</label>
                </div>
                <div className={styles.inputDiv}>
                    <input {...props.input}/>
                    {props.meta.touched && !props.meta.valid && <label className={styles.fieldErrorMessage}>{props.meta.error}</label>}
                </div>
            </div>
        );
    
    }

    required =(value) =>{
        return value === "" || value === null || value === undefined ? "This field is required." : undefined;
    }

    onSubmit = (formData) =>{
        const {from} = this.props.location.state || { from: { pathname: "/" } };
        this.props.LoginAction(formData, from);
    }

  render(){
    return (
        <div className={styles.loginForm}>
            {this.props.error && <p className={styles.errorMessage}>{this.props.error}</p>}

            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>

                <Field label="User name" name="userName" component={this.RenderInput} validate={[this.required]}/>

                <Field label="Password" name="password" component={this.RenderInput} validate={[this.required]}/>

                <div className={styles.submitButton}>
                    <button type={'submit'}>Login</button>
                </div>
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
