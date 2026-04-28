import COUNTRIES from "@/app/classes/generator";
import Seal from "@/app/classes/Seal";

type Country = typeof COUNTRIES;

interface SealProps {
  country: Country;
  variant: Seal;
}

export default function SealImage({ country, variant }: SealProps) {
  return <Box></Box>;
}
