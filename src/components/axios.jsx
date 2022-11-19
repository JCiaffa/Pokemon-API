import React, { useState } from "react";
import axios from "axios";

const Pokemon = () => {
  const [pokemons, setPokemons] = useState(null);
  const [count, setCount] = useState(0);

  const onClick = () => {
    setCount(count + 1);
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=1154&offset=0")
      .then((response) => {
        let results = response.data.results
          .filter((p) => p.name[0] === "b")
          .map((p) => p.name);
        setPokemons(results);
      });
  };

  return (
    <div>
      <button onClick={onClick} type="button">
        Fetch Pokemon
      </button>
      {pokemons
        ? pokemons.map((pokemons, index) => {
            return <div key={index}>{pokemons}</div>;
          })
        : null}
    </div>
  );
};

export default Pokemon;
