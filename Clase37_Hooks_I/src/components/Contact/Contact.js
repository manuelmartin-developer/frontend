import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Contact = () => {
  
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
      const getPokemons = async () =>{
          const resp = await axios.get('https://pokeapi.co/api/v2/pokemon');
          setPokemons(resp.data.results);
      }
      getPokemons();
  }, []);

  return (
    <section>
      <ul>
        {pokemons.map((pokemon, index) => 
        <li key={index}>Trabajador: {pokemon.name} - Url contacto: {pokemon.url}</li>)}
      </ul>
    </section>
  );
  
}

export default Contact;
