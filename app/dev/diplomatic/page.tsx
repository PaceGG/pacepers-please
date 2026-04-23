"use client";

import Diplomatic from "@/app/classes/Diplomatic";
import { COUNTRIES } from "@/app/classes/generator";
import Passport from "@/app/classes/Passport";
import { useState } from "react";
import dynamic from "next/dynamic";

const DiplomaticCard = dynamic(
  () => import("@/app/components/DiplomaticCard"),
  {
    ssr: false,
  },
);

export default function Dev() {
  const [passport] = useState(() => new Passport());
  const [diplomatic] = useState(() => new Diplomatic(passport));
  console.log(diplomatic);

  return <DiplomaticCard diplomatic={diplomatic} />;
}
