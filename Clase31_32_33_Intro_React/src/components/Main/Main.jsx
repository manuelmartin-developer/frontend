import React, { Component } from "react";
import ProductList from "../ProductList";
import './Main.css'
class Main extends Component {
  render() {
    return (
      <main className="Main">
          <ProductList/>
      </main>
  )
  }
}

export default Main;
