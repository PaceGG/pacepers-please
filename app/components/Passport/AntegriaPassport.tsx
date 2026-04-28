"use client";

import { Box, Button, Paper, Typography } from "@mui/material";
import Photo from "../Photo";
import Passport from "@/app/classes/Passport";
import "@fontsource/raleway";
import colors from "@/data/colors.json";
import styled from "@emotion/styled";

const borderWidth = 4;
const Blank = styled(Box)({
  display: "flex",
  flexDirection: "row",
  gap: 8,

  borderBottom: `${borderWidth}px solid transparent`,
  borderImage: `repeating-linear-gradient(
    90deg,
    ${colors.antegria.secondaryText} 0 ${borderWidth}px,
    transparent ${borderWidth}px ${borderWidth * 2}px
  ) 1`,
  paddingLeft: 8,
});

const Chip = styled(Typography)({
  bgcolor: colors.antegria.secondaryText,
  color: colors.antegria.secondaryText,
  width: 35,
});

export interface AntegriaPasportProps {
  passport: Passport;
}

export default function AntegriaPasport({ passport }: AntegriaPasportProps) {
  console.log(passport);

  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              textTransform: "uppercase",
              fontFamily: "Raleway",
              fontWeight: 400,
              fontSize: 50,
              color: colors.antegria.secondaryText,
            }}
          >
            {passport.country}
          </Typography>
          <Blank>
            <Chip>РОД</Chip>
            <Typography>{passport.birth.toLocaleDateString()}</Typography>
          </Blank>
          <Blank>
            <Chip>ПОЛ</Chip>
            <Typography>{passport.sex}</Typography>
          </Blank>
          <Blank>
            <Chip>ВЫД</Chip>
            <Typography>{passport.city}</Typography>
          </Blank>
          <Blank>
            <Chip>ДО</Chip>
            <Typography>{passport.validUntil.toLocaleDateString()}</Typography>
          </Blank>
        </Box>
        <Box>
          <Photo width={180} height={"100%"} />
        </Box>
      </Box>
      <Blank>
        <Typography>{passport.getReversedName()}</Typography>
      </Blank>
      <Box>
        <Typography
          sx={{
            textAlign: "right",
            textTransform: "uppercase",
            fontSize: "1.5rem",
            paddingRight: 1,
          }}
        >
          {passport.id}
        </Typography>
      </Box>
    </Box>
  );
}
