import React from 'react';
import {Link} from 'react-router-dom';
import LoginButton from '../Login/LoginButton';
import styles from './Header.module.css';
import logo from '../../assets/logo.jpeg'
class Header extends React.Component {

  render(){
    return (
        <div className={styles.header}>
            <img src={logo} alt="logo"/>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/writters">Writters</Link></li>
              <li><Link to="/books">Books</Link></li>
            </ul>
            <LoginButton/>
        </div>
    );
  }  
}

export default Header;
