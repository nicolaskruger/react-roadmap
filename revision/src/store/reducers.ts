import { combineReducers } from "@reduxjs/toolkit";
import { pokemonReducer } from "./pokebatle";

export const rootReducer = combineReducers({
  pokemon: pokemonReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
