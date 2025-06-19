"use client";
import { CountryType, FavoriteCountry } from "@/domain/country/types";
import { CountryCard } from "../CountryCard";
import styles from "./styles.module.scss";

interface CountryListProps {
  countries: CountryType[];
  favorites: FavoriteCountry[];
  onCardClick: (country: CountryType) => void;
  onToggleFavorite: (country: FavoriteCountry) => void;
}

export function CountryList({
  countries,
  favorites,
  onCardClick,
  onToggleFavorite,
}: CountryListProps) {
  console.log(favorites);
  return (
    <div className={styles.grid}>
      {countries.map((country) => (
        <CountryCard
          key={country.cca3}
          country={country}
          isFavorite={favorites.some((f) => f.cca3 === country.cca3)}
          onClick={() => onCardClick(country)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}
