"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Box } from "@mui/material";
import Ticket from "@/app/classes/Ticket";
import Passport from "@/app/classes/Passport";
const TicketComponent = dynamic(() => import("@/app/components/TicketCard"), {
  ssr: false,
});
const PassportCard = dynamic(
  () => import("../../components/Passport/PassportCard"),
  {
    ssr: false,
  },
);

export default function Dev() {
  const [passport] = useState(() => new Passport());
  const [ticket] = useState(() => new Ticket());

  return (
    <Box sx={{ display: "flex", gap: 1, alignItems: "start" }}>
      {/* <PassportCard passport={passport} /> */}
      <TicketComponent ticket={ticket} />
    </Box>
  );
}
