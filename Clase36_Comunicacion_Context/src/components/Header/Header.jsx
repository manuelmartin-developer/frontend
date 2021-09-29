import React, { Component } from "react";
import Nav from "../Nav/Nav";
import { userContext } from '../../contexts/userContex';

class Header extends Component {

  render() {
    return (
      <header className="header">
        <h1 className="header--h1">Mi App de productos</h1>
        <Nav clase="header--nav" />
        <userContext.Consumer>
          {({ user, logout }) =>
            user.name ?
              <>
                <p>Hola, {user.name}</p>
                <button onClick={() => logout()}>Logout</button>
              </> : <p>Haz login</p>
          }
        </userContext.Consumer>
      </header>
    )
  }
}

export default Header;
