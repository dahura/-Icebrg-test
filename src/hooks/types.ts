interface Continent {
  code: string;
  name: string;
}

interface Country {
  code: string;
  name: string;
  native: string;
  phone: string;
  continent: string;
  capital: string;
  currency: string;
  languages: string;
}

interface Language {
  code: string;
  name: string;
  native: string;
  rtl: boolean;
}

export interface SearchResponse {
  continents: Continent[] | null;
  countries: Country[] | null;
  languages: Language[] | null;
}
