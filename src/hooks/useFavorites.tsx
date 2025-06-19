"use client";

import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  useEffect,
} from "react";
import { FavoriteCountry } from "@/domain/country/types";

type FavoritesState = FavoriteCountry[];

type FavoritesAction =
  | { type: "ADD"; payload: FavoriteCountry }
  | { type: "REMOVE"; payload: string }
  | { type: "INIT"; payload: FavoriteCountry[] };

interface FavoritesContextType {
  favorites: FavoritesState;
  addFavorite: (country: FavoriteCountry) => void;
  removeFavorite: (code: string) => void;
}

const FavoritesContext = createContext({} as FavoritesContextType);

function favoritesReducer(state: FavoritesState, action: FavoritesAction) {
  switch (action.type) {
    case "ADD":
      if (state.find((code) => code.cca3 === action.payload.cca3)) return state;
      const newState = [...state, action.payload];
      localStorage.setItem("favorites", JSON.stringify(newState));
      return newState;

    case "REMOVE":
      const updated = state.filter((c) => c.cca3 !== action.payload);
      localStorage.setItem("favorites", JSON.stringify(updated));
      return updated;

    case "INIT":
      return action.payload;

    default:
      return state;
  }
}

function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, dispatch] = useReducer(favoritesReducer, []);

  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) {
      dispatch({ type: "INIT", payload: JSON.parse(stored) });
    }
  }, []);

  const addFavorite = (country: FavoriteCountry) =>
    dispatch({ type: "ADD", payload: country });

  const removeFavorite = (code: string) =>
    dispatch({ type: "REMOVE", payload: code });

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

function useFavorites() {
  return useContext(FavoritesContext);
}

export { FavoritesProvider, useFavorites };
