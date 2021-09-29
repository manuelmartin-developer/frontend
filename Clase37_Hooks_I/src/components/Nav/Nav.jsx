import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (         
    <nav className="nav">
      <ul>
        <li className="nav-element"><Link to="/">Home</Link></li>
        <li className="nav-element"><Link to="/about">About</Link></li>
        <li className="nav-element"><Link to="/staff">Staff</Link></li>
        <li className="nav-element"><Link to="/contact">Contacto</Link></li>
        <li className="nav-element"><Link to="/donation">Donation</Link></li>
        <li className="nav-element"><Link to="/feed">Feed</Link></li>
        <li className="nav-element"><Link to="/login">Login</Link></li>
      </ul>
    </nav>);
  }
}

export default Nav;
