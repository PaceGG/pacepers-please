"use client";

import Passport from "@/app/classes/Passport";
import IDCard from "@/app/classes/IDCard";
import { useState } from "react";
import dynamic from "next/dynamic";
import { Box } from "@mui/material";
const IDCardComponent = dynamic(() => import("@/app/components/IDCard"), {
  ssr: false,
});
const PassportCard = dynamic(
  () => import("@/app/components/Passport/PassportCard"),
  { ssr: false },
);

export default function Dev() {
  const [passport] = useState(() => new Passport());
  const [idCard] = useState(() => new IDCard(passport));

  return (
    <Box sx={{ display: "flex", gap: 1, alignItems: "start" }}>
      <PassportCard passport={passport} />
      <IDCardComponent idCard={idCard} />
    </Box>
  );
}
