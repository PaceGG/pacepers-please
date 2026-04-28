import Visa from "@/app/classes/Visa";
import { Box, Paper, Typography } from "@mui/material";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme";
import SealImage from "./Seal";
import "@fontsource/ibm-plex-mono";
import "@fontsource/iosevka-etoile/200.css";

const colors = {
  paper: "#e3edce",
  text: "#8e7c6e",
  printedText: "#827294",
};

const visaTheme = createTheme({
  ...theme,
  typography: {
    fontFamily: "IBM Plex Mono, arial",
    fontWeightRegular: 900,
  },
});

const Blank = styled(Typography)({
  textAlign: "center",
  borderBottom: `2px solid ${colors.text}`,
  color: colors.printedText,
  textTransform: "uppercase",
});

const Chip = styled(Typography)({});

interface VisaCardProps {
  visa: Visa;
}

export default function VisaCard({ visa }: VisaCardProps) {
  return (
    <ThemeProvider theme={visaTheme}>
      <Paper
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          width: 350,
          minHeight: 500,
          bgcolor: colors.paper,
          color: colors.text,
        }}
      >
        <Box sx={{ position: "absolute", right: 40, top: 40 }}>
          <SealImage country="visa" variant={"invalid4"} color="red" />
        </Box>
        <Typography
          sx={{
            fontFamily: "Iosevka Etoile, monospace",
            fontSize: "2rem",
            lineHeight: "2rem",
            textAlign: "center",
            my: 2,
          }}
        >
          Разрешение на въезд
        </Typography>
        <Box
          sx={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
            p: 2,
          }}
        >
          <Typography>
            Право временного пребывания на территории независимой Арстотцки
            предоставляется
          </Typography>
          <Blank>{visa.name}</Blank>
          <Typography>номер паспорта</Typography>
          <Blank>{visa.passport}</Blank>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              rowGap: 2,
              alignItems: "center",
            }}
          >
            <Chip>Цель поездки</Chip>
            <Blank>{visa.purpose}</Blank>

            <Chip>Срок</Chip>
            <Blank>{visa.duration}</Blank>

            <Chip>Въезд до</Chip>
            <Blank>{visa.valid.toLocaleDateString()}</Blank>
          </Box>
        </Box>
      </Paper>
    </ThemeProvider>
  );
}
