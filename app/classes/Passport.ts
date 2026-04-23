import {
  CITIES,
  COUNTRIES,
  NAMES,
  rand,
  random,
  randomPassportId,
  randTrue,
  YEAR,
} from "./generator";

type Sex = "М" | "Ж";

export default class Passport {
  id: string;
  name: string;
  country: string;
  city: string;
  birth: Date;
  sex: Sex;
  validUntil: Date;

  isFake: boolean;
  hasPhoto: boolean;
  isExpired: boolean;

  constructor(day: number = 0) {
    // id
    this.id = randomPassportId();

    // Имя
    this.name = random(NAMES);

    // Страна
    this.country = random(COUNTRIES);
    if (day === 1 && randTrue()) this.country = "Estovia";

    // Город
    this.city = random(CITIES);

    // Пол
    this.sex = randTrue() ? "М" : "Ж";

    // Возраст
    const age = rand(14, 90);

    const now = Date.now();

    this.birth = new Date(now - age * YEAR);

    // Срок действия
    this.isExpired = Math.random() < day * 0.02;
    if (day === 2 && randTrue()) this.isExpired = true;

    const validityYears = rand(1, 10);

    this.validUntil = new Date(
      now + (this.isExpired ? -rand(1, 5) * YEAR : validityYears * YEAR),
    );

    this.isFake = day > 10 ? Math.random() < 0.1 + day * 0.01 : false;

    this.hasPhoto = Math.random() > 0.1;
  }

  isValid(day: number): boolean {
    if (day === 0) {
      return true;
    }
    if (day === 1) {
      if (this.country === "Estovia") return true;
    }
    return false;
  }

  clone() {
    return Object.assign(new Passport(), this);
  }
}
