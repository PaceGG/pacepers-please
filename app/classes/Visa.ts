import Passport from "./Passport";

export type MOASeal =
  | "valid1"
  | "valid2"
  | "invalid1"
  | "invalid2"
  | "invalid3"
  | "invalid4"
  | "invalid5"
  | "invalid6"
  | "invalid7";

export default class Visa {
  name: string;
  passport: string;
  purpose: string;
  duration: string;
  valid: Date;
  seal: MOASeal;

  constructor(passport: Passport, day = 0) {
    // Имя
    this.name = passport.name;

    // Номер паспорта
    this.passport = passport.id;

    // Цель визита
    this.purpose = "Гости";

    // Продолжительность
    this.duration = "14 дней";

    // Годен до
    this.valid = new Date();
    this.valid.setFullYear(this.valid.getFullYear() + 1);

    // Печать
    this.seal = "valid1";
  }
}
