"use client";

import {
  createContext,
  useReducer,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import { CountryType } from "@/domain/country/types";
import { getCountries } from "@/domain/country/actions";

type CountryListState = {
  loading: boolean;
  data: CountryType[];
  error: string | null;
};

type CountryListAction =
  | { type: "FETCH_START" }
  | { type: "FETCH_SUCCESS"; payload: CountryType[] }
  | { type: "FETCH_ERROR"; payload: string };

interface CountryListContextType {
  countryListState: CountryListState;
  fetchCountries: (search?: string) => void;
}

const CountryListContext = createContext({} as CountryListContextType);

const initialState: CountryListState = {
  loading: false,
  data: [],
  error: null,
};

function reducer(
  state: CountryListState,
  action: CountryListAction
): CountryListState {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

function CountryListProvider({ children }: { children: ReactNode }) {
  const [countryListState, dispatch] = useReducer(reducer, initialState);

  const fetchCountries = async (search?: string) => {
    dispatch({ type: "FETCH_START" });
    const response = await getCountries(search);

    const start = Date.now();
    const elapsed = Date.now() - start;
    const minDelay = 1000;

    if (elapsed < minDelay) {
      await new Promise((res) => setTimeout(res, minDelay - elapsed));
    }

    if (response.status === 200 && response.data) {
      dispatch({ type: "FETCH_SUCCESS", payload: response.data });
    } else {
      dispatch({ type: "FETCH_ERROR", payload: response.message });
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <CountryListContext.Provider value={{ countryListState, fetchCountries }}>
      {children}
    </CountryListContext.Provider>
  );
}

function useCountryList() {
  return useContext(CountryListContext);
}

export { CountryListProvider, useCountryList };
