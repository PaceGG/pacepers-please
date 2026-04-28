"use client";

import Passport from "@/app/classes/Passport";
import { useState } from "react";
import dynamic from "next/dynamic";
import { Box } from "@mui/material";
import Visa from "@/app/classes/Visa";

const VisaCard = dynamic(() => import("@/app/components/VisaCard"), {
  ssr: false,
});

const PassportCard = dynamic(
  () => import("@/app/components/Passport/PassportCard"),
  {
    ssr: false,
  },
);

export default function Dev() {
  const [passport] = useState(() => new Passport());
  const [visa] = useState(() => new Visa(passport));

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 1,
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      <PassportCard passport={passport} />
      <VisaCard visa={visa} />
    </Box>
  );
}
