import React, { Component } from "react";
import Nav from "../Nav/Nav";

class Header extends Component {
  render() {
      return (
        <header className="header">
            <h1 className="header--h1">Mi App de productos</h1>
            <Nav clase="header--nav" />
        </header>
    )
  }
}

export default Header;
