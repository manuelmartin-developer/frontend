import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Nav extends Component {
  
  render() {
    return (
        <nav className={this.props.clase}>
          <ul className="nav--ul">
            <li className="nav--ul--li">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/staff">Staff</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
    )
  }
}

export default Nav;
