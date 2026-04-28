import Passport from "@/app/classes/Passport";
import { Box, Typography } from "@mui/material";
import colors from "@/data/colors.json";
import "@fontsource/jetbrains-mono";
import Photo from "../Photo";
import { styled } from "@mui/material/styles";
import Strips from "@/app/styled/Strips";

const Chip = styled(Typography)({
  backgroundColor: colors["united federation"].secondaryText,
  color: colors.paper,
  width: 40,
  padding: "0 5px",
  boxSizing: "content-box",
});

const Blank = styled(Box)({
  display: "flex",
  flexDirection: "row",
  gap: 8,
});

interface UnitedFederationPassportProps {
  passport: Passport;
}

export default function UnitedFederationPassport({
  passport,
}: UnitedFederationPassportProps) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
      <Box sx={{ display: "flex" }}>
        <Strips
          thickness={"6px"}
          gap={0}
          color={colors["united federation"].secondaryText}
        />
        <Typography
          sx={{
            whiteSpace: "nowrap",
            fontFamily: "JetBrains Mono",
            textTransform: "uppercase",
            fontSize: "2rem",
            lineHeight: "25px",
            color: colors["united federation"].secondaryText,
            px: 1,
          }}
        >
          {passport.country}
        </Typography>
        <Strips
          thickness={"6px"}
          gap={0}
          color={colors["united federation"].secondaryText}
        />
      </Box>
      <Box>
        <Typography>{passport.getReversedName()}</Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 0.5 }}>
        <Box>
          <Photo height={"100%"} />
        </Box>
        <Box
          sx={{ display: "flex", gap: 0.5, flexDirection: "column", flex: 1 }}
        >
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
          <Box sx={{ height: 24 }}>
            <Strips
              thickness={"6px"}
              gap={"3px"}
              color={colors["united federation"].secondaryText}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              textTransform: "uppercase",
              justifyContent: "end",
              px: 1,
            }}
          >
            <Typography>{passport.id}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
