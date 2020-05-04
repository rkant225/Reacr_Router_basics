import React from 'react';
import {connect} from 'react-redux';
import * as Actions from '../../Redux/actions';
import history from '../../Utils/History';
import styles from './LoginButton.module.css';

class LoginButton extends React.Component {


  render(){
    return (
        <div className={styles.loginButton}>
            {this.props.isLoggedIn ? <a onClick={()=> this.props.LogOutAction()}>Log Out</a> : <a onClick={() => history.push("/login")}>Log In</a>}
            {!this.props.isLoggedIn && <a onClick={() => history.push("/signup")}>Sign Up</a>}
        </div>
    );
  }  
}

const mapStateToProps = (state) =>{
    return{
        isLoggedIn : state.AuthReducer.isLoggedIn,
    }
}



export default connect(mapStateToProps, {LoginAction : Actions.Login, LogOutAction : Actions.LogOut})(LoginButton);
