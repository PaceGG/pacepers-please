"use client";

import Diplomatic from "@/app/classes/Diplomatic";
import Passport from "@/app/classes/Passport";
import { useState } from "react";
import dynamic from "next/dynamic";
import { Box } from "@mui/material";

const DiplomaticCard = dynamic(
  () => import("@/app/components/DiplomaticCard"),
  {
    ssr: false,
  },
);

const PassportCard = dynamic(
  () => import("@/app/components/Passport/PassportCard"),
  {
    ssr: false,
  },
);

export default function Dev() {
  const [passport] = useState(() => new Passport());
  const [diplomatic] = useState(() => new Diplomatic(passport));
  console.log(diplomatic);

  return (
    <Box sx={{ display: "flex", gap: 1, alignItems: "flex-start" }}>
      <PassportCard passport={passport} />
      <DiplomaticCard diplomatic={diplomatic} />
    </Box>
  );
}
