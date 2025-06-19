"use client";

import { FavoriteCountry } from "@/domain/country/types";
import styles from "./styles.module.scss";
import { Trash2 } from "lucide-react";

type Props = {
  country: FavoriteCountry;
  onRemove: (code: string) => void;
};

export function FavoriteCard({ country, onRemove }: Props) {
  const formattedDate = new Date(country.addedAt).toLocaleDateString("en-GB");

  return (
    <div className={styles.card}>
      <img src={country.flag} alt={country.name} className={styles.flag} />

      <div className={styles.info}>
        <h3 className={styles.name}>{country.name}</h3>
        <span className={styles.date}>Added {formattedDate}</span>
      </div>

      <button className={styles.remove} onClick={() => onRemove(country.cca3)}>
        <Trash2 size={18} />
      </button>
    </div>
  );
}
