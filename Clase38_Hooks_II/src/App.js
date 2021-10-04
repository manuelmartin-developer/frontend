import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { userContext } from './context/userContext';
import { themeContext } from './context/themeContext';
import './styles/styles.scss';




export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      user: {
        name:""
      },
      theme: ""
    }

  }

  login = (name) => this.setState({user:{name}})
  
  logout = () => this.setState({user:{name:""}})

  toggleTheme = () => {
    this.setState({
      theme: this.state.theme === "" ? "dark" : "",
    });
  };

  render() {
    const value = {
      user: this.state.user,
      login: this.login,
      logout: this.logout
    }
    const theme = {
      theme: this.state.theme,
      toggleTheme: this.toggleTheme
  }

    return (
      <div className="App">
      <BrowserRouter>
        <userContext.Provider value={value}>
        <themeContext.Provider value={theme}> 
          <Header/>
          <Main/>
        </themeContext.Provider>
        </userContext.Provider>
      </BrowserRouter>
      <Footer/>
    </div>
    )
  }
}

export default App