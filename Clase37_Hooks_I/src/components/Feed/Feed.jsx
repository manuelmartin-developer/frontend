import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Contact = () => {
  
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const getPokemons = async () =>{
            const res = await axios.get('https://pokeapi.co/api/v2/pokemon');
            setPokemons(res.data.results);
        }
        getPokemons();
    }, []);

    return (
      <section>
        <h1>Contacto</h1>
        <ul>
          {pokemons.map((pokemon, i)=>
            <li key={i}>Trabajador: {pokemon.name}. URL contacto: {pokemon.url}</li>
        )}
        </ul>
      </section>
    )
}
 
export default Contact