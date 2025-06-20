"use client";

import { FavoriteCountry } from "@/domain/country/types";
import { FavoriteCard } from "../FavoriteCard";
import styles from "./styles.module.scss";

type FavoritesListProps = {
  favorites: FavoriteCountry[];
  onRemove: (code: string) => void;
};

export function FavoritesList({ favorites, onRemove }: FavoritesListProps) {
  return (
    <div className={styles.grid}>
      {favorites.map((country) => (
        <FavoriteCard
          key={country.cca3}
          country={country}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}
