import React from 'react';
import {connect} from 'react-redux';
import * as Actions from '../../Redux/actions';
import {Field, reduxForm} from 'redux-form';
import styles from './SignUp.module.css';

class SignUp extends React.Component {

    componentWillUnmount(){
        this.props.ResetSignupStateAction();
    }

    onSubmit = (formData) =>{

        const dataToSave = {
            id : formData.userName,
            firstName :  formData.firstName,
            lastName :  formData.lastName,
            userName :  formData.userName,
            password : formData.password,
            email : formData.email,
            mobileNo : formData.mobileNo
          }

        //console.log(formData);
        this.props.SignUpAction(dataToSave);
    }

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


    // RenderInput =(props)=>{
    //     return (
    //         <div>
    //             <div>
    //                 <label>{props.label}</label>
    //             </div>
    //             <div>
    //                 <input {...props.input}/>
    //                 {props.meta.touched && !props.meta.valid && <span>{props.meta.error}</span>}
    //             </div>
    //         </div>
    //     );
    
    // }

    

    required =(value) =>{
        return value === "" || value === null || value === undefined ? "This field is required." : undefined;
    }

    validateLength = (length)=> (value)=>{
        return value && value.length < length ? `Length must be ${length} or more.` : undefined;
    }

    validateLength_6 = this.validateLength(6);
    validateLength_3 = this.validateLength(3);

    validateSamePassword =(value, formData)=>{
        return value && value !== formData.password ? "There is mismatch in both passwords." : undefined;
    }

    validateEmail = (value) =>{
        const ValidEmail = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
        return value && !ValidEmail.test(value) ? "Please enter valid Email Id" : undefined;
    }

    validatePhoneNumber = (value) =>{
        const ValidPhoneNumber = RegExp(/^\d{10}$/);
        return value && !ValidPhoneNumber.test(value) ? "Please enter valid mobile no." : undefined;
    }

  render(){

    return (
        <div className={styles.signupForm}>
            {this.props.error && <p className={styles.errorMessage}>{this.props.error}</p>}
            {this.props.successMessage && <p className={styles.successMessage}>{this.props.successMessage}</p>}
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>

                
                <Field label="First name" name="firstName" component={this.RenderInput} validate={[this.required]}/>

                <Field label="Last name" name="lastName" component={this.RenderInput} validate={[this.required]}/>

                <Field label="Email name" name="email" component={this.RenderInput} validate={[this.required, this.validateEmail]}/>

                <Field label="User Name" name="userName" component={this.RenderInput} validate={[this.required, this.validateLength_3]}/>

                <Field label="Mobile Number" name="mobileNo" component={this.RenderInput} validate={[this.required,this.validatePhoneNumber]}/>

                <Field label="Password" name="password" component={this.RenderInput} validate={[this.required,this.validateLength_6]}/>

                <Field label="Confirm Password" name="confirmPassword" component={this.RenderInput} validate={[this.required,this.validateLength_6, this.validateSamePassword]}/>

                <div className={styles.submitButton}>
                    <button type={'submit'}>Sign Up</button>
                </div>
            </form>
        </div>
    );
  }  
}

const mapStateToProps = (state) =>{
    return{
        error : state.SignUpReducer.error,
        successMessage : state.SignUpReducer.successMessage
    }
}



export default reduxForm({form : "SignUpForm"})(connect(mapStateToProps, {SignUpAction : Actions.SignUp, ResetSignupStateAction : Actions.ResetSignupState})(SignUp));
