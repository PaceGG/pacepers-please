import { randomNormal } from "./generator";

type Sex = "М" | "Ж";

type PercentilePoint = {
  age: number;
  p3: number;
  p10: number;
  p25: number;
  p50: number;
  p75: number;
  p90: number;
  p97: number;
};

const HEIGHT_TABLE: Record<Sex, PercentilePoint[]> = {
  М: [
    { age: 2, p3: 82, p10: 85, p25: 88, p50: 92, p75: 96, p90: 100, p97: 103 },
    {
      age: 5,
      p3: 98,
      p10: 102,
      p25: 106,
      p50: 110,
      p75: 114,
      p90: 118,
      p97: 121,
    },
    {
      age: 10,
      p3: 124,
      p10: 129,
      p25: 134,
      p50: 139,
      p75: 144,
      p90: 149,
      p97: 153,
    },
    {
      age: 15,
      p3: 156,
      p10: 162,
      p25: 168,
      p50: 173,
      p75: 178,
      p90: 183,
      p97: 187,
    },
    {
      age: 20,
      p3: 163,
      p10: 168,
      p25: 173,
      p50: 178,
      p75: 183,
      p90: 188,
      p97: 192,
    },
    {
      age: 30,
      p3: 162,
      p10: 167,
      p25: 172,
      p50: 177,
      p75: 182,
      p90: 187,
      p97: 191,
    },
    {
      age: 45,
      p3: 161,
      p10: 166,
      p25: 171,
      p50: 176,
      p75: 181,
      p90: 185,
      p97: 189,
    },
    {
      age: 60,
      p3: 159,
      p10: 164,
      p25: 169,
      p50: 173,
      p75: 178,
      p90: 182,
      p97: 186,
    },
    {
      age: 75,
      p3: 157,
      p10: 162,
      p25: 166,
      p50: 170,
      p75: 175,
      p90: 179,
      p97: 183,
    },
  ],
  Ж: [
    { age: 2, p3: 81, p10: 84, p25: 87, p50: 90, p75: 94, p90: 98, p97: 101 },
    {
      age: 5,
      p3: 97,
      p10: 101,
      p25: 105,
      p50: 109,
      p75: 113,
      p90: 117,
      p97: 120,
    },
    {
      age: 10,
      p3: 125,
      p10: 129,
      p25: 134,
      p50: 139,
      p75: 144,
      p90: 149,
      p97: 153,
    },
    {
      age: 15,
      p3: 151,
      p10: 156,
      p25: 160,
      p50: 164,
      p75: 168,
      p90: 172,
      p97: 176,
    },
    {
      age: 20,
      p3: 154,
      p10: 158,
      p25: 162,
      p50: 166,
      p75: 170,
      p90: 174,
      p97: 178,
    },
    {
      age: 30,
      p3: 153,
      p10: 157,
      p25: 161,
      p50: 165,
      p75: 169,
      p90: 173,
      p97: 177,
    },
    {
      age: 45,
      p3: 152,
      p10: 156,
      p25: 160,
      p50: 164,
      p75: 168,
      p90: 172,
      p97: 176,
    },
    {
      age: 60,
      p3: 150,
      p10: 154,
      p25: 158,
      p50: 162,
      p75: 166,
      p90: 170,
      p97: 174,
    },
    {
      age: 75,
      p3: 148,
      p10: 152,
      p25: 156,
      p50: 160,
      p75: 164,
      p90: 168,
      p97: 172,
    },
  ],
};

const WEIGHT_TABLE: Record<Sex, PercentilePoint[]> = {
  М: [
    { age: 2, p3: 10, p10: 11, p25: 12, p50: 13, p75: 14, p90: 15, p97: 16 },
    { age: 5, p3: 15, p10: 16, p25: 18, p50: 20, p75: 22, p90: 24, p97: 26 },
    { age: 10, p3: 25, p10: 28, p25: 31, p50: 35, p75: 40, p90: 45, p97: 50 },
    { age: 15, p3: 46, p10: 52, p25: 58, p50: 65, p75: 72, p90: 80, p97: 88 },
    { age: 20, p3: 57, p10: 63, p25: 70, p50: 78, p75: 87, p90: 97, p97: 108 },
    { age: 30, p3: 59, p10: 66, p25: 73, p50: 81, p75: 90, p90: 100, p97: 112 },
    { age: 45, p3: 61, p10: 69, p25: 77, p50: 86, p75: 96, p90: 108, p97: 121 },
    {
      age: 60,
      p3: 62,
      p10: 71,
      p25: 80,
      p50: 90,
      p75: 101,
      p90: 114,
      p97: 128,
    },
    { age: 75, p3: 60, p10: 68, p25: 77, p50: 87, p75: 98, p90: 110, p97: 124 },
  ],
  Ж: [
    { age: 2, p3: 10, p10: 11, p25: 12, p50: 13, p75: 14, p90: 15, p97: 16 },
    { age: 5, p3: 15, p10: 16, p25: 18, p50: 19, p75: 21, p90: 23, p97: 25 },
    { age: 10, p3: 24, p10: 27, p25: 30, p50: 34, p75: 38, p90: 43, p97: 48 },
    { age: 15, p3: 42, p10: 48, p25: 54, p50: 60, p75: 67, p90: 75, p97: 84 },
    { age: 20, p3: 47, p10: 53, p25: 59, p50: 66, p75: 74, p90: 83, p97: 93 },
    { age: 30, p3: 49, p10: 56, p25: 63, p50: 71, p75: 80, p90: 90, p97: 102 },
    { age: 45, p3: 51, p10: 58, p25: 66, p50: 74, p75: 84, p90: 95, p97: 108 },
    { age: 60, p3: 52, p10: 60, p25: 68, p50: 77, p75: 87, p90: 99, p97: 113 },
    { age: 75, p3: 50, p10: 58, p25: 66, p50: 75, p75: 85, p90: 97, p97: 111 },
  ],
};

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function interpolateAge(
  table: PercentilePoint[],
  age: number,
  key: keyof PercentilePoint,
): number {
  if (age <= table[0].age) return table[0][key] as number;
  if (age >= table[table.length - 1].age)
    return table[table.length - 1][key] as number;

  for (let i = 0; i < table.length - 1; i++) {
    const left = table[i];
    const right = table[i + 1];

    if (age >= left.age && age <= right.age) {
      const t = (age - left.age) / (right.age - left.age);
      return lerp(left[key] as number, right[key] as number, t);
    }
  }

  return table[table.length - 1][key] as number;
}

function percentileToValue(
  table: PercentilePoint[],
  age: number,
  percentile: number,
): number {
  const p = clamp(percentile, 0, 100);

  const points = [
    { p: 3, key: "p3" as const },
    { p: 10, key: "p10" as const },
    { p: 25, key: "p25" as const },
    { p: 50, key: "p50" as const },
    { p: 75, key: "p75" as const },
    { p: 90, key: "p90" as const },
    { p: 97, key: "p97" as const },
  ];

  if (p <= 3) {
    return interpolateAge(table, age, "p3");
  }
  if (p >= 97) {
    return interpolateAge(table, age, "p97");
  }

  for (let i = 0; i < points.length - 1; i++) {
    const left = points[i];
    const right = points[i + 1];

    if (p >= left.p && p <= right.p) {
      const leftValue = interpolateAge(table, age, left.key);
      const rightValue = interpolateAge(table, age, right.key);
      const t = (p - left.p) / (right.p - left.p);
      return lerp(leftValue, rightValue, t);
    }
  }

  return interpolateAge(table, age, "p50");
}

function percentileFromNormal(): number {
  return clamp(randomNormal(50, 18), 1, 99);
}

export function generateHeightAndWeight(sex: Sex, age: number) {
  const heightPercentile = percentileFromNormal();
  const weightPercentile = clamp(heightPercentile + randomNormal(0, 12), 1, 99);

  const height = Math.round(
    percentileToValue(HEIGHT_TABLE[sex], age, heightPercentile),
  );

  const weight = Math.round(
    percentileToValue(WEIGHT_TABLE[sex], age, weightPercentile),
  );

  return {
    height, // см
    weight, // кг
  };
}
