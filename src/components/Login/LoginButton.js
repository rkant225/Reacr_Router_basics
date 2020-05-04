import React from 'react';
import {connect} from 'react-redux';
import * as Actions from '../../Redux/actions';
import history from '../../Utils/History';

class LoginButton extends React.Component {


  render(){
    return (
        <div>
            {this.props.isLoggedIn ? <button onClick={()=> this.props.LogOutAction()}>Log Out</button> : <button onClick={() => history.push("/login")}>Log In</button>}
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
