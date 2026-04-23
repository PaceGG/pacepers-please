import { CITIES, COUNTRIES, rand, random, randTrue, YEAR } from "./generator";
import NAMES from "@/data/names.json";

export type Sex = "М" | "Ж";

export default class Passport {
  id: string;
  name: string;
  country: string;
  city: string;
  birth: Date;
  sex: Sex;
  validUntil: Date;
  age: number;

  isExpired: boolean;

  constructor(day: number = 0) {
    // id
    this.id = randomPassportId();

    // Пол
    this.sex = randTrue() ? "М" : "Ж";

    // Имя
    this.name = randomName(this.sex);

    // Страна
    this.country = random(COUNTRIES);
    if (day === 1 && randTrue()) this.country = "Estovia";

    // Город
    this.city = random(CITIES);

    // Возраст
    const age = rand(14, 90);
    this.age = age;

    const now = Date.now();

    this.birth = new Date(now - age * YEAR);

    // Срок действия
    this.isExpired = Math.random() < day * 0.02;
    if (day === 2 && randTrue()) this.isExpired = true;

    const validityYears = rand(1, 10);

    this.validUntil = new Date(
      now + (this.isExpired ? -rand(1, 5) * YEAR : validityYears * YEAR),
    );
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

function randomPassportId(): string {
  const chars: string = "abcdefghijklmnopqrstuvwxyz0123456789";

  const generatePart = (length: number): string => {
    let result: string = "";
    for (let i = 0; i < length; i++) {
      const randomIndex: number = Math.floor(Math.random() * chars.length);
      result += chars[randomIndex];
    }
    return result;
  };

  return `${generatePart(5)}-${generatePart(5)}`;
}

function randomName(sex: Sex): string {
  return sex === "М" ? random(NAMES.males) : random(NAMES.females);
}
