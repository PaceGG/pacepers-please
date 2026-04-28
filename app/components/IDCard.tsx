"use client";

import { Box, Paper, Typography } from "@mui/material";
import "@fontsource/ibm-plex-mono";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { theme } from "../theme";
import Photo from "./Photo";
import Image from "next/image";
import styled from "@emotion/styled";
import IDCard from "../classes/IDCard";

const colors = {
  paper: "#dcc2fb",
  primary: "#b3a1cb",
  secondary: "#3e394d",
};

const idCardTheme = createTheme({
  ...theme,
  typography: {
    fontFamily: "IBM Plex Mono, monospace",
    fontWeightRegular: 900,
    fontSize: 18,
  },
});

const Blank = styled(Box)({
  display: "flex",
  gap: 8,
  color: colors.secondary,
  borderTop: `2px solid ${colors.primary}`,
});

const Chip = styled(Typography)({
  backgroundColor: colors.primary,
  color: colors.paper,
  width: 50,
  textAlign: "center",
});

interface IDCardProps {
  idCard: IDCard;
}

export default function IDCardCard({ idCard }: IDCardProps) {
  return (
    <ThemeProvider theme={idCardTheme}>
      <Paper
        sx={{
          bgcolor: colors.paper,
          color: colors.secondary,
          width: 400,
          p: 1,
          borderRadius: 2,
          userSelect: "none",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            border: `2px solid ${colors.primary}`,
            borderRadius: 2,
            color: colors.primary,
            overflow: "hidden",
          }}
        >
          <Typography sx={{ textAlign: "center" }}>
            АРСТОТЦКА ЛИЧНАЯ КАРТА
          </Typography>
          <Typography
            sx={{ bgcolor: colors.secondary, px: 1, color: colors.paper }}
          >
            Район {idCard.district}
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "2px",
              borderRadius: 1,
              bgcolor: colors.primary,
            }}
          >
            <Box
              sx={{
                border: `2px solid ${colors.paper}`,
                borderRadius: "0 0 0 7px",
                borderTop: "none",
                overflow: "hidden",
              }}
            >
              <Photo
                height={150}
                width={120}
                bgcolor={colors.primary}
                color={colors.secondary}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
                flex: 1,
                bgcolor: colors.paper,
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  zIndex: 0,
                  top: "50%",
                  left: "50%",
                  width: 180,
                  height: 1,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Image
                  src={"/arstotzka.png"}
                  fill
                  alt=""
                  style={{ objectFit: "contain" }}
                />
              </Box>
              <Box sx={{ color: colors.secondary, px: 1, zIndex: 1 }}>
                <Typography>{idCard.name.split(" ")[1]}</Typography>
                <Typography>{idCard.name.split(" ")[0]}</Typography>
              </Box>
              <Box>
                <Blank>
                  <Chip>РОД</Chip>
                  <Typography sx={{ zIndex: 1 }}>
                    {idCard.birth.toLocaleDateString()}
                  </Typography>
                </Blank>
                <Blank>
                  <Chip>РОС</Chip>
                  <Typography sx={{ zIndex: 1 }}>{idCard.height}см</Typography>
                </Blank>
                <Blank>
                  <Chip>ВЕС</Chip>
                  <Typography sx={{ zIndex: 1 }}>{idCard.weight}кг</Typography>
                </Blank>
              </Box>
            </Box>
          </Box>
        </Box>
      </Paper>
    </ThemeProvider>
  );
}
