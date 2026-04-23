export const YEAR = 365 * 24 * 60 * 60 * 1000;
export const DAY = 24 * 60 * 60 * 1000;

export const COUNTRIES = [
  "Antegria",
  "Arstotzka",
  "Impor",
  "Kolechia",
  "Obristan",
  "Republia",
  "United Federation",
];

export const CITIES = ["city 1", "city 2", "city 3"];

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

export function randomNormal(mean: number, stdDev: number): number {
  let u = 0,
    v = 0;

  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();

  const z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  return z * stdDev + mean;
}

export function randTrue(probability: number = 0.5): boolean {
  return Math.random() < probability;
}

export function randomPassportId(): string {
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
