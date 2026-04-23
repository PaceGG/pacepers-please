import Passport from "@/app/classes/Passport";
import FlexBox from "@/app/styled/FlexBox";
import { Box, Divider, Typography } from "@mui/material";
import Photo from "../Photo";
import { styled } from "@mui/material/styles";
import colors from "@/data/colors.json";
import "@fontsource/jetbrains-mono";

const Chip = styled(Typography)({
  backgroundColor: colors.arstotzka.secondaryText,
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

interface ArstotzkaPasportProps {
  passport: Passport;
}

export default function ArstotzkaPasport({ passport }: ArstotzkaPasportProps) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <Box>
        <Typography>{passport.name}</Typography>
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
          <Typography
            sx={{
              fontFamily: "JetBrains Mono",
              color: colors.arstotzka.secondaryText,
              fontWeight: 600,
              fontSize: "2rem",
              textAlign: "right",
              borderBottom: `0.5rem solid ${colors.arstotzka.secondaryText}`,
              lineHeight: "1em",
            }}
          >
            ARSTOTZKA
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          textTransform: "uppercase",
          alignItems: "center",
        }}
      >
        <Typography>{passport.id}</Typography>
        <Divider
          sx={{
            flex: 1,
            marginLeft: 5,
            borderBottom: `${4}px solid transparent`,
            borderImage: `repeating-linear-gradient(
            90deg,
            ${colors.antegria.secondaryText} 0 ${4}px,
            transparent ${4}px ${4 * 2}px
          ) 1`,
          }}
        />
      </Box>
    </Box>
  );
}
