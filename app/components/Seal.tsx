import { COUNTRIES, rand } from "@/app/classes/generator";
import Seal from "@/app/classes/Diplomatic";
import { Box } from "@mui/material";
import Image from "next/image";

interface SealNoise {
  top: number;
  left: number;
  rotate: number;
}

interface SealProps {
  country: string;
  variant: string;
  color?: "orange" | "red" | "purple";
  noise?: SealNoise | null;
}

export default function SealImage({
  country,
  variant,
  color = "orange",
  noise = null,
}: SealProps) {
  if (!noise)
    noise = {
      top: rand(0, 50),
      left: rand(0, 50),
      rotate: rand(-45, 45),
    };

  const colorsMap = {
    orange:
      "brightness(0) saturate(100%) invert(48%) sepia(99%) saturate(1845%) hue-rotate(2deg) brightness(101%) contrast(101%)",
    red: "brightness(0) saturate(100%) invert(16%) sepia(92%) saturate(7496%) hue-rotate(356deg) brightness(101%) contrast(114%)",
    purple:
      "brightness(0) saturate(100%) invert(16%) sepia(44%) saturate(6789%) hue-rotate(252deg) brightness(95%) contrast(108%)",
  };

  return (
    <Box
      sx={{
        width: 150,
        height: 150,
        paddingLeft: `${noise.top}px`,
        paddingTop: `${noise.left}px`,
        transform: `rotate(${noise.rotate}deg)`,
        filter: colorsMap[color],
        opacity: 0.4,
      }}
    >
      <Image
        src={`/seals/${country}/${variant}.png`}
        alt={`error: seal`}
        width={100}
        height={100}
      />
    </Box>
  );
}
