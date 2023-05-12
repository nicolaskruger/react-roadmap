import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./reducers";

export type Pokemon = {
  name: string;
  life: number;
};

type Pokebatle = {
  a: Pokemon;
  b: Pokemon;
};

const initialState: Pokebatle = {
  a: {
    name: "charmander",
    life: 100,
  },
  b: {
    name: "squardle",
    life: 100,
  },
};

type Atack = {
  with: keyof Pokebatle;
  damage: number;
};

const slice = createSlice({
  name: "pokebatle",
  initialState,
  reducers: {
    atack: (state: Pokebatle, action: PayloadAction<Atack>): Pokebatle => {
      const selected = action.payload.with;
      const pokemon = state[selected];

      return {
        ...state,
        [selected]: {
          ...pokemon,
          life: pokemon.life - action.payload.damage,
        },
      };
    },
  },
});

export const pokemonReducer = slice.reducer;

export const { atack } = slice.actions;

export const pokemonSelector = (state: RootState) => state.pokemon;
