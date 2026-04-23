import { generateHeightAndWeight } from "./bmiGenerator";
import {
  ARSTOTZKA_DISTRICTS,
  rand,
  random,
  randomNormal,
  YEAR,
} from "./generator";
import Passport, { Sex } from "./Passport";

export default class IDCard {
  district: string;
  birth: Date;
  name: string;
  height: number;
  weight: number;

  constructor(passport: Passport, day: number = 0) {
    // Район
    this.district = random(ARSTOTZKA_DISTRICTS);

    // Возраст
    this.birth = passport.birth;

    // Имя
    this.name = passport.name;

    // Возраст
    const person = generateHeightAndWeight(passport.sex, passport.age);
    this.height = person.height;
    this.weight = person.weight;
  }
}

function generatePerson(gender: Sex) {
  const heightMean = gender === "М" ? 175 : 165;
  const heightStd = gender === "М" ? 7 : 6;

  const heightCm = randomNormal(heightMean, heightStd);
  const heightM = heightCm / 100;

  const bmiMean = gender === "М" ? 23 : 21;
  const bmiStd = 3;

  const bmi = randomNormal(bmiMean, bmiStd);
  const weight = bmi * heightM * heightM;

  return {
    height: Math.round(heightCm),
    weight: Math.round(weight),
  };
}
