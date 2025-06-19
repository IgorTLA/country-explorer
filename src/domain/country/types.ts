export type CountryType = {
  name: {
    common: string;
    official: string;
    nativeName?: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  flags: { svg: string; alt?: string };
  capital: string[];
  region: string;
  subregion?: string;
  population: number;
  languages: {
    [key: string]: string;
  };
  area: number;
  cca3: string;
};

export interface FavoriteCountry {
  cca3: string;
  name: string;
  flag: string;
  addedAt: string;
}
