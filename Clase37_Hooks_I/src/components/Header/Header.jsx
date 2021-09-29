import React, { Component } from "react";
import Nav from "../Nav/Nav";
import Button from '@mui/material/Button';

import {userContext} from '../../context/userContext';
import logo from "../../assets/hot-pot.png";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <img src={logo} alt="hot-pot"/>
        <div className="header-title">
        <h1 className="header--h1">Mi app de comida</h1>
        <Nav/>
        </div>
        <userContext.Consumer>
        {({user,logout}) => 
        
          user.name?           
          <>
            <p>Hola, {user.name}</p>
            <Button onClick={()=>logout()}>Logout</Button>
          </> :""
        }
        </userContext.Consumer>

      </header>
    )
  }
}

export default Header;
