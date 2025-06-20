"use client";
import { MapPin, Users, Heart } from "lucide-react";
import { CountryType, FavoriteCountry } from "@/domain/country/types";
import { formatPopulation } from "@/utils/formatters";
import { Button, ButtonVariants } from "@/components/ui/Button";
import styles from "./styles.module.scss";

interface CountryCardProps {
  country: CountryType;
  isFavorite: boolean;
  onClick: () => void;
  onToggleFavorite: (country: FavoriteCountry) => void;
}

export function CountryCard({
  country,
  isFavorite,
  onClick,
  onToggleFavorite,
}: CountryCardProps) {
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();

    const favoriteCountry: FavoriteCountry = {
      cca3: country.cca3,
      name: country.name.common,
      flag: country.flags.svg,
      addedAt: new Date().toISOString(),
    };

    onToggleFavorite(favoriteCountry);
  };

  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.flagWrapper}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={country.flags.svg}
          alt={country.flags.alt || `Flag of ${country.name.common}`}
        />
        <Button
          variant={ButtonVariants.ICON}
          icon={<Heart size={16} />}
          isIconOnly
          isSelected={isFavorite}
          onClick={handleFavoriteClick}
          ariaLabel="Toggle favorite"
          className={`${styles.favoriteButton} ${
            isFavorite ? styles.active : ""
          }`}
        />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{country.name.common}</h3>

        <div className={styles.detail}>
          <MapPin size={14} />
          <span>{country.capital?.[0] || "No capital"}</span>
        </div>

        <div className={styles.detail}>
          <Users size={14} />
          <span>{formatPopulation(country.population)}</span>
        </div>

        <div className={styles.subregion}>
          {country.region} • {country.subregion || "N/A"}
        </div>
      </div>
    </div>
  );
}
