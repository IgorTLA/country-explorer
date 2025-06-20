"use client";

import { Input } from "@/components/ui/Input";
import { Search } from "lucide-react";
import styles from "./page.module.scss";
import { CountryList } from "@/components/country/CountryList";
import { useRouter } from "next/navigation";
import { useCountryList } from "@/hooks/useCountryList";
import { LoadingDots } from "@/components/ui/LoadingDots";
import { useDebounce } from "@/hooks/useDebounce";
import { useEffect, useState } from "react";
import { useFavorites } from "@/hooks/useFavorites";
import { FavoriteCountry } from "@/domain/country/types";
import { useToast } from "@/hooks/useToast";

export default function Countries() {
  const router = useRouter();
  const { countryListState, fetchCountries } = useCountryList();
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const { showToast } = useToast();

  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);

  const handleToggleFavorite = (country: FavoriteCountry) => {
    const isAlreadyFavorite = favorites.find(
      (item) => item.cca3 === country.cca3
    );

    if (isAlreadyFavorite) {
      removeFavorite(country.cca3);
      showToast({
        status: "success",
        title: `Country ${country.name} removed from favorites`,
        duration: 2000,
      });
    } else {
      addFavorite(country);
      showToast({
        status: "success",
        title: `Country ${country.name} added to favorites`,
        duration: 2000,
      });
    }
  };

  useEffect(() => {
    fetchCountries(debouncedSearch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch]);

  return (
    <div className={styles.container}>
      <Input
        placeholder="Search countries"
        icon={<Search size={24} />}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className={styles.countryList}>
        {countryListState.loading ? (
          <div className={styles.loading}>
            <LoadingDots />
          </div>
        ) : countryListState.error ? (
          <div className={styles.error}>{countryListState.error}</div>
        ) : countryListState.data.length === 0 ? (
          <div className={styles.empty}>
            <div>No countries found</div>
            <div>Try searching for another country!</div>
          </div>
        ) : (
          <CountryList
            countries={countryListState.data}
            favorites={favorites}
            onCardClick={(country) => router.push(`/country/${country.cca3}`)}
            onToggleFavorite={handleToggleFavorite}
          />
        )}
      </div>
    </div>
  );
}
