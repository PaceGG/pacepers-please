"use client";

import { Box, Button } from "@mui/material";
import Passport from "@/app/classes/Passport";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const PassportCard = dynamic(
  () => import("../../components/Passport/PassportCard"),
  {
    ssr: false,
  },
);

import { COUNTRIES as countries } from "@/app/classes/generator";

export default function Dev() {
  const [passport, setPassport] = useState(() => new Passport());

  const setCountry = (newCountry: string) => {
    setPassport((prev) => {
      const updated = prev.clone();
      updated.country = newCountry;
      return updated;
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 500,
        minHeight: 500,
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 1,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {countries.map((country) => (
          <Button key={country} onClick={() => setCountry(country)}>
            {country}
          </Button>
        ))}
      </Box>
      <PassportCard passport={passport} />
    </Box>
  );
}
