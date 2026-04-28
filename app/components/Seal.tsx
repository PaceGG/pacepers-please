import { COUNTRIES, rand } from "@/app/classes/generator";
import Seal from "@/app/classes/Diplomatic";
import { Box } from "@mui/material";
import Image from "next/image";

type Country = (typeof COUNTRIES)[number];

interface SealProps {
  country: Country;
  variant: Seal;
}

export default function SealImage({ country, variant }: SealProps) {
  const noise = {
    top: rand(0, 50),
    left: rand(0, 50),
    rotate: rand(-45, 45),
  };

  return (
    <Box
      sx={{
        width: 150,
        height: 150,
        paddingLeft: `${noise.top}px`,
        paddingTop: `${noise.left}px`,
        transform: `rotate(${noise.rotate}deg)`,
        filter:
          "brightness(0) saturate(100%) invert(48%) sepia(99%) saturate(1845%) hue-rotate(2deg) brightness(101%) contrast(101%)",
        opacity: 0.4,
      }}
    >
      <Image
        src={`/seals/${country}/${variant}.png`}
        alt="error: seal"
        width={100}
        height={100}
      />
    </Box>
  );
}
