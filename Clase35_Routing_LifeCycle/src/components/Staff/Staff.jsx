import React, { Component } from "react";
import PokemonsApi from "../PokemonsApi/PokemonsApi";
class Staff extends Component {

  constructor(props) {
    super(props);
    this.state = { pokeLista: [] }
    // Event binding (Bindear eventos)
    console.log('CONSTRUCTOR')

  }
  async componentDidMount(){
    //Petición HTTP
    // fetch('https://pokeapi.co/api/v2/pokemon')
    //     .then(resp => resp.json())
    //     .then(data => data)
    const resp = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = await resp.json();
    this.setState({
        pokeLista: data.results
    })
    console.log('componentDidMount');
}
componentDidUpdate(prevProps, prevState){
  console.log('prevProps: ', prevProps, 'prevState: ', prevState)
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
  <>
    <PokemonsApi lista={this.state.pokeLista}></PokemonsApi>
    <button onClick={this.handlerLoadPokemons}>Load Pokemons</button>
    <button onClick={this.handlerResetPokemons}>Reset Pokemons</button>
    <button onClick={this.handlerUpdate}>Force Update</button>
  </>
);
}
}

export default Staff;
