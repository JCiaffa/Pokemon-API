import React, { useState } from "react";

const Pokemon = () => {
  const [pokemons, setPokemons] = useState(0);
  const [count, setCount] = useState(0);

  const onClick = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setPokemons(response.results);
      });
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={onClick} type="button">
        Fetch Pokemon
      </button>
      {pokemons
        ? pokemons.map((item, index) => {
            return <div key={index}>{item.name}</div>;
          })
        : null}
    </div>
  );
};

export default Pokemon;
