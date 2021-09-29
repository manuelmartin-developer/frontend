import React, { Component } from "react";
import ProductList from "../ProductList";
import About from "../About/About";
import Staff from "../Staff/Staff";
import Contact from "../Contact/Contact";
import Login from "../Login/Login"
import Error from "../Error/Error";
import { Route, Switch } from 'react-router-dom';


class Main extends Component {

 

  render() {
    return (
      <main>
          <Switch>
            <Route path="/" component={ProductList} exact />
            <Route path="/about" component={About} />
            <Route path="/staff" component={Staff} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <Route component={Error} />
          </Switch>
      </main>
  )
  }
}

export default Main;
