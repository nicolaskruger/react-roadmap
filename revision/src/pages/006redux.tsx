import { Pokemon, atack, pokemonSelector } from "@/store/pokebatle";
import { useDispatch, useSelector } from "react-redux";

type PokemonAndType = Pokemon & {
  type: "a" | "b";
};

const PokemonInfo = ({ name, life, type }: PokemonAndType) => {
  const dispatch = useDispatch();
  return (
    <ul>
      <li>name: {name}</li>
      <li>life: {life}</li>
      <li>
        <button onClick={() => dispatch(atack({ damage: 1, with: type }))}>
          atack
        </button>
      </li>
    </ul>
  );
};

const PokemonReducerApp = () => {
  const { a, b } = useSelector(pokemonSelector);

  return (
    <div>
      <PokemonInfo {...a} type="b" />
      <PokemonInfo {...b} type="a" />
      <br />
      <a
        target="_blank"
        href="https://github.dev/treetips/typescript-nextjs-redux-toolkit-material-ui-example"
      >
        reference repo
      </a>
    </div>
  );
};

export default PokemonReducerApp;
