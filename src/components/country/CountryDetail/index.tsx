// components/country/CountryDetail.tsx
import { CountryType } from "@/domain/country/types";
import styles from "./styles.module.scss";

type CountryDetailProps = {
  country: CountryType;
};

export function CountryDetail({ country }: CountryDetailProps) {
  return (
    <div className={styles.wrapper}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={country.flags.svg}
        alt={`Flag of ${country.name.common}`}
        className={styles.flag}
      />

      <div className={styles.info}>
        <h1>{country.name.common}</h1>

        <ul>
          <li>
            <strong>Capital:</strong> {country.capital?.[0] || "N/A"}
          </li>
          <li>
            <strong>Region:</strong> {country.region}
          </li>
          <li>
            <strong>Subregion:</strong> {country.subregion || "N/A"}
          </li>
          <li>
            <strong>Population:</strong>{" "}
            {Intl.NumberFormat().format(country.population)}
          </li>
          <li>
            <strong>Area:</strong> {Intl.NumberFormat().format(country.area)}{" "}
            km²
          </li>
          <li>
            <strong>Languages:</strong>{" "}
            {country.languages
              ? Object.values(country.languages).join(", ")
              : "N/A"}
          </li>
        </ul>
      </div>
    </div>
  );
}
