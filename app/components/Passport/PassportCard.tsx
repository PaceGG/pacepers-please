"use client";

import Passport from "@/app/classes/Passport";
import { Paper, Typography } from "@mui/material";
import Photo from "../Photo";
import AntegriaPasport from "./AntegriaPassport";
import ArstotzkaPassport from "./ArstotzkaPassport";
import KolechiaPassport from "./KolechiaPassport";
import "@fontsource/ibm-plex-mono";
import colors from "@/data/colors.json";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { theme } from "@/app/theme";
import ImporPassport from "./ImporPassport";
import ObristanPassport from "./ObristanPassport";
import RepubliaPassport from "./RepubliaPassport";
import UnitedFederationPassport from "./UnitedFederationPassport"

const passportTheme = createTheme({
  ...theme,
  typography: {
    fontFamily: "IBM Plex Mono, monospace",
    fontWeightRegular: 900,
    fontSize: 18,
  },
});

export interface PassportProps {
  passport: Passport;
}

export default function Pasport({ passport }: PassportProps) {
  const PassportComponents = {
    Antegria: AntegriaPasport,
    Arstotzka: ArstotzkaPassport,
    Impor: ImporPassport,
    Kolechia: KolechiaPassport,
    Obristan: ObristanPassport,
    Republia: RepubliaPassport,
    "United Federation": UnitedFederationPassport,
  };
  const PassportComponent = PassportComponents[passport.country];

  return (
    <ThemeProvider theme={passportTheme}>
      <Paper
        sx={{
          p: 1,
          width: 500,
          bgcolor: colors.paper,
          border: `8px solid ${colors[passport.country.toLowerCase()]?.passport || "black"}`,
          userSelect: "none",
        }}
      >
        {PassportComponent ? (
          <PassportComponent passport={passport} />
        ) : (
          <>Error</>
        )}
      </Paper>
    </ThemeProvider>
  );
}
