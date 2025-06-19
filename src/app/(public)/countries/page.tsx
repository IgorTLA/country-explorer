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

export default function Countries() {
  const router = useRouter();
  const { countryListState, fetchCountries } = useCountryList();
  const { favorites, addFavorite } = useFavorites();

  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);

  const handleToggleFavorite = (country: FavoriteCountry) => {
    addFavorite(country);
  };

  useEffect(() => {
    fetchCountries(debouncedSearch);
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
          <div className={styles.message}>
            <LoadingDots />
          </div>
        ) : countryListState.error ? (
          <div className={styles.message}>{countryListState.error}</div>
        ) : countryListState.data.length === 0 ? (
          <div className={styles.message}>
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
