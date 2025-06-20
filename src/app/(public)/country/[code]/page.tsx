"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getCountryByCode } from "@/domain/country/actions";
import { CountryType } from "@/domain/country/types";
import { CountryDetail } from "@/components/country/CountryDetail";
import { LoadingDots } from "@/components/ui/LoadingDots";
import styles from "./page.module.scss";

export default function CountryPage() {
  const { code } = useParams();
  const [country, setCountry] = useState<CountryType | null>(null);
  const [loading, setLoading] = useState(true);

  async function fetch() {
    const countryState = await getCountryByCode(String(code));

    setCountry(countryState.data);
    setLoading(false);
  }

  useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);

  if (loading)
    return (
      <p className={styles.loading}>
        <LoadingDots />
      </p>
    );
  if (!country) return <p className={styles.notFound}>Country not found.</p>;

  return (
    <div className={styles.container}>
      <CountryDetail country={country} />
    </div>
  );
}
