import React, { Component } from "react";
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import './styles/styles.scss'
import { BrowserRouter } from 'react-router-dom';
import {userContext} from '../src/contexts/userContex';


export class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      user: {
        name: 'Manuel'
      }
    }
  }

  login = (name) => {
    this.setState({user:{name}});
  }

  logout = () => this.setState({user:{name:""}});
  
  render() {

    const value = {
      user: this.state.user,
      login: this.login,
      logout: this.logout
    }

    return (
      <div className="App">
      <BrowserRouter>
        <userContext.Provider value={value}>
          <Header/>
          <Main/>
        </userContext.Provider>
      </BrowserRouter>
        <Footer/>
    </div>
    )
  }
}

export default App;
