import React from 'react';
import axios from 'axios';
import {Router, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {Home, Writters, Book, Books, NotFound} from './';
import ProtectedRoute from '../Utils/ProtectedRoute';
import Login from '../components/Login/Login';
import Header from '../components/Header/Header';
import SignUp from '../components/SignUp/SignUp';
import history from '../Utils/History';

import styles from './App.module.css'




class App extends React.Component {
  state = {writers : []} 

  async componentDidMount(){
    const response = await axios.get('http://localhost:3001/writers?_embed=books');
    this.setState({writers : response.data, isAuthanticated : true})
  }



  render(){
    const {writers} = this.state;
    const {isLoggedIn} = this.props;

    return (
        <Router history={history}>          
          <Header/>
          <div className={styles.container}>
            <Switch>
              <Route path="/" exact render={(props)=><Home {...props} />}/>
              <Route path="/login" component={Login}/>
              <Route path="/signup" component={SignUp}/>
              <ProtectedRoute isAuthanticated={isLoggedIn} path="/writters" componentToRender={(props)=><Writters {...props} writers={writers} />}/>
              <ProtectedRoute isAuthanticated={isLoggedIn} exact path={"/books"} componentToRender={(props)=><Books {...props}/>}/>
              <ProtectedRoute isAuthanticated={isLoggedIn} path={"/book/:bookId"} componentToRender={(props)=><Book {...props}/>}/>
              <Route render={()=><NotFound/>}/>
            </Switch>
          </div>
        </Router>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
      isLoggedIn : state.AuthReducer.isLoggedIn,
  }
}

export default connect(mapStateToProps)(App);
