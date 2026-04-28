import { COUNTRIES, rand, randTrue, shuffle } from "./generator";
import Passport from "./Passport";

export type Seal =
  | "valid1"
  | "valid2"
  | "invalid1"
  | "invalid2"
  | "invalid3"
  | "invalid4";

export default class Diplomatic {
  name: string;
  passport: string;
  seal: Seal;
  country: string;
  countries: string[];

  constructor(passport: Passport, day: number = 0) {
    // Имя
    this.name = passport.name;

    // Номер паспорта
    this.passport = passport.id;

    // Печать
    this.seal = "valid1";

    // Страна
    this.country = passport.country;

    // Допуск к странам
    this.countries = generateCountries(this.country);
  }
}

export function generateCountries(
  diplomaticCountry: string,
  isValid = true,
): string[] {
  const basePool = COUNTRIES.filter(
    (c) => c !== diplomaticCountry && c !== "Arstotzka",
  );

  const basePoolShuffled = shuffle(basePool);

  const count = rand(1, basePoolShuffled.length);

  const result = basePoolShuffled.slice(0, count);

  if (isValid) result.push("Arstotzka");

  return shuffle(result);
}
