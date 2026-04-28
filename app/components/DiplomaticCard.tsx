"use client";

import { Box, Typography, Paper } from "@mui/material";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme";
import Brail from "../styled/Brail";
import BarCode from "../styled/BarCode";
import SealImage from "./Seal";
import "@fontsource/ibm-plex-mono";
import "@fontsource/iosevka-etoile/200.css";
import Diplomatic from "../classes/Diplomatic";

const diplomaticTheme = createTheme({
  ...theme,
  typography: {
    fontFamily: "IBM Plex Mono, arial",
    fontWeightRegular: 900,
    // fontSize: 16,
  },
});

const colors = {
  paper: "#f0f0fc",
  text: "#a4bcb1",
  printedText: "#858b98",
  stamp: "#eec58f",
};

const Chip = styled(Typography)({
  fontSize: "1.1rem",
});

const borderWidth = 3;
const Blank = styled(Typography)({
  textAlign: "center",
  flex: 1,
  color: colors.printedText,
  textTransform: "uppercase",
  marginBottom: "4px",
  borderBottom: `${borderWidth}px solid transparent`,
  borderImage: `repeating-linear-gradient(
      90deg,
      ${colors.text} 0 ${borderWidth}px,
      transparent ${borderWidth}px ${borderWidth * 2}px
    ) 1`,
});

type Props = {
  diplomatic: Diplomatic;
};

export default function DiplomaticDocument({ diplomatic }: Props) {
  return (
    <ThemeProvider theme={diplomaticTheme}>
      <Paper
        sx={{
          width: "380px",
          minHeight: "500px",
          position: "relative",
          backgroundColor: colors.paper,
          borderRadius: 0,
          fontFamily: "inherit",
          overflow: "hidden",
          color: colors.text,
          userSelect: "none",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            zIndex: 0,
            right: 15,
            top: 50,
          }}
        >
          <SealImage country={diplomatic.country} variant={diplomatic.seal} />
        </Box>

        {/* LEFT VERTICAL TEXT */}
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "28px",
            display: "flex",
            py: 2,
            justifyContent: "center",
            borderRight: `2px solid ${colors.text}`,
          }}
        >
          <Typography
            sx={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
              fontSize: "1.3rem",
              textTransform: "uppercase",
            }}
          >
            Совет наций - союз семи государств
          </Typography>
        </Box>

        {/* HEADER */}
        <Box
          sx={{
            pl: "28px",
            borderBottom: `2px solid ${colors.text}`,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              borderRight: `2px solid ${colors.text}`,
              alignSelf: "stretch",
              px: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                pr: 1,
              }}
            >
              <Brail size={21} color={colors.text} />
            </Box>
          </Box>
          <Typography
            sx={{
              flex: 1,
              px: 1,
              color: colors.printedText,
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            {diplomatic.country}
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "2px",
              p: 1,
              borderLeft: `2px solid ${colors.text}`,
            }}
          >
            <BarCode
              text={diplomatic.passport}
              color={colors.text}
              height={7}
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            ml: "28px",
            p: 2,
            gap: 2,
          }}
        >
          {/* TITLE */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              zIndex: 1,
            }}
          >
            <Typography
              sx={{
                fontFamily: "Iosevka Etoile, monospace",
                fontSize: "2rem",
                lineHeight: "2rem",
                mb: 1,
              }}
            >
              Дипломатический
              <br />
              статус
            </Typography>
            {/* <Box>Seal/</Box> */}
          </Box>

          {/* BODY TEXT */}
          <Box>
            <Typography sx={{ lineHeight: "1.1em" }}>
              Предъявитель является дипломатическим представителем государства,
              входящего в Совет Наций
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {/* AGENT */}
            <Box sx={{ display: "flex", alignItems: "end" }}>
              <Chip>ИМЯ</Chip>
              <Blank>{diplomatic.name}</Blank>
            </Box>

            {/* PASSPORT */}
            <Box sx={{ display: "flex", alignItems: "end" }}>
              <Chip>ПАСПОРТ</Chip>
              <Blank>{diplomatic.passport}</Blank>
            </Box>
          </Box>

          {/* ACCESS TEXT */}
          <Box>
            <Typography sx={{ lineHeight: "1.1em" }}>
              Свободный въёзд во все указанные страны Совета Наций
            </Typography>
          </Box>

          {/* COUNTRIES BOX */}
          <Box
            sx={{
              border: `2px dashed ${colors.text}`,
              px: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: "1.2rem",
                color: colors.printedText,
                textTransform: "uppercase",
                wordSpacing: "-8px",
                // lineHeight: "2rem",
                height: "5.5rem",
              }}
            >
              {diplomatic.countries.join(", ")}
            </Typography>
          </Box>

          {/* FOOTER */}
          <Box>
            <Typography>Срок действия не ограничен</Typography>
          </Box>
        </Box>
      </Paper>
    </ThemeProvider>
  );
}
