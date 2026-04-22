export const YEAR = 365 * 24 * 60 * 60 * 1000;
export const DAY = 24 * 60 * 60 * 1000;

export const COUNTRIES = [
  "Estovia",
  "Kolechia",
  "Obristan",
  "Antegria",
  "Impor",
];

export const NAMES = [
  "Ivan Petrov",
  "Alexei Morozov",
  "John Carter",
  "Luis Herrera",
  "Marek Novak",
  "Daniel Silva",
  "Noah Brown",
  "Artem Volkov",
  "Victor Hale",
  "Samuel Reed",
];

export function random<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function rand(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randTrue(probability: number = 0.5): boolean {
  return Math.random() < probability;
}
