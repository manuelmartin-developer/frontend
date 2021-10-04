import React, { Component } from "react";
import axios from 'axios';
import Button from '@mui/material/Button';
import { Spinner } from 'react-spinners-css';

import PokemonsApi from "../PokemonsApi";


class Staff extends Component {
  constructor(props) {
    super(props);
    this.state = { pokeLista: [],
    spinner: true }
    // Event binding (Bindear eventos)
    console.log('CONSTRUCTOR')
}

async componentDidMount(){
        //Petición HTTP      
          await new Promise(resolve => setTimeout(resolve, 2000)); // simular retardo
          const resp = await axios.get('https://pokeapi.co/api/v2/pokemon');
          const data = await resp.data;
          this.setState({
            spinner: false
          })
          this.setState({
              pokeLista: data.results
          })
          console.log('componentDidMount');
    }

  componentDidUpdate(prevProps, prevState){
      console.log('prevProps: ', prevProps, 'prevState: ', prevState)
      console.log(`Estado antes:${prevState.pokeLista.length} , Estado actual:${this.state.pokeLista.length}`)
      console.log('componentDidUpdate');
  }

  componentWillUnmount(){
    console.log('componentWillUnmount');
  }

  handlerLoadPokemons = async () => {
    const resp = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = await resp.json();
    this.setState({
        pokeLista: data.results
    })
}

  handlerResetPokemons = () => {
      this.setState({
          pokeLista: []
      })
  }

  handlerUpdate = () => {
    this.forceUpdate()
}
render() {
    console.log('RENDER')
    return (
      <div className="staff">
        {
          this.state.spinner === true
         ?   <Spinner color="#46bde8" className="staff-spinner"/> :
         <PokemonsApi lista={this.state.pokeLista}></PokemonsApi> 
        }
                
        <div className="staff-buttons">
        <Button onClick={this.handlerLoadPokemons} variant="contained" size="medium">
          Load Pokemon
        </Button> 
        <Button onClick={this.handlerResetPokemons} variant="contained" size="medium">
          Reset
        </Button>
        <Button onClick={this.handlerUpdate} variant="contained" size="medium">
          Force Update
        </Button>
        </div>
      </div>
        
        
    );
}










}

export default Staff;
