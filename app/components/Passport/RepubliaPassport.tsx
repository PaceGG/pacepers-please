import Passport from "@/app/classes/Passport";
import { Box, Typography } from "@mui/material";
import Photo from "../Photo";
import { styled } from "@mui/material/styles";
import colors from "@/data/colors.json";
import "@fontsource/geist/900";

const Chip = styled(Typography)({
  backgroundColor: colors.republia.secondaryText,
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

interface RepubliaPassportProps {
  passport: Passport;
}

export default function RepubliaPassport({ passport }: RepubliaPassportProps) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <Box>
        <Typography>{passport.name}</Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 0.5, flexDirection: "row-reverse" }}>
        <Box>
          <Photo
            height={180}
            color={colors.republia.primaryText}
            bgcolor={colors.republia.secondaryText}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 0.5,
            flexDirection: "column",
            flex: 1,
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
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
              <Typography>
                {passport.validUntil.toLocaleDateString()}
              </Typography>
            </Blank>
          </Box>
          <Box>
            <Typography
              sx={{
                fontFamily: "Geist",
                color: colors.republia.secondaryText,
                fontSize: "2rem",
                lineHeight: "1em",
              }}
            >
              REPUBLIA
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          textTransform: "uppercase",
          alignItems: "center",
        }}
      >
        <Typography>{passport.id}</Typography>
      </Box>
    </Box>
  );
}
