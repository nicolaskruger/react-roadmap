import { MouseEvent, useCallback, useState } from "react";

type Pokemon = {
  name: string;
  level: number;
};

const Func = () => {
  const [pokemon, setPokemon] = useState<Pokemon>({
    name: "pikachu",
    level: 1,
  });

  const evolve = useCallback(
    (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
      setPokemon({
        ...pokemon,
        level: ++pokemon.level,
      });
    },
    [pokemon]
  );

  return (
    <main>
      <p>name: {pokemon.name}</p>
      <p>level: {pokemon.level}</p>
      <button onClick={evolve}>evolve</button>
    </main>
  );
};

export default Func;
