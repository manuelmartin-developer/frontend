import React, { Component } from "react";

class Nav extends Component {
  
  render() {
    return (
        <nav className={this.props.clase}>
          <ul className="nav--ul">
            <li>Home</li>
            <li>About Us</li>
          </ul>
        </nav>
    )
  }
}

export default Nav;
