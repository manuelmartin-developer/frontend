
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from "../About";
import Contact from "../Contact";
import Donation from "../Donation";
import Error from "../Error/Error";
import Feed from "../Feed";
import Login from "../Login";
import ProductList from "../ProductList";
import Staff from "../Staff";



function Main() {
  return (
    <main>
      <Switch>
          <Route path="/" component={ProductList} exact/>
          <Route path="/about" component={About} />
          <Route path="/staff" component={Staff} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/donation" component={Donation} />
          <Route path="/Feed" component={Feed} />
          <Route component={Error} />
      </Switch>
    </main>
  )
}

export default Main
