import axios from 'axios';
import React, { useEffect, useState } from 'react';
import  useFetch  from '../../hooks/fetch-hook'

const Contact = () => {
  
  const [pokemons, setPokemons] = useState([]);
  const {loading, result} = useFetch('https://pokeapi.co/api/v2/pokemon')
  
  useEffect(() => {
    setPokemons(result.results)
  }, [result]);

    return (
      <section>
        <ul>
          {loading? <p>Cargando...</p> : pokemons.map((pokemon, index) => 
          <li key={index}>Trabajador: {pokemon.name} - Url contacto: {pokemon.url}</li>)}
        </ul>
      </section>
    );
}

export default Contact;
