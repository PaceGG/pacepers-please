import Passport from "@/app/classes/Passport";
import { Box, Typography } from "@mui/material";
import colors from "@/data/colors.json";
import "@fontsource/eb-garamond/700";
import { styled } from "@mui/material/styles";
import Photo from "../Photo";

interface ObristanPassportProps {
  passport: Passport;
}

const Marker = styled(Box)({
  width: 30,
  height: 30,
  backgroundColor: colors.paper,
  borderRadius: "50%",
});

const Chip = styled(Typography)({
  width: 40,
});

const Blank = styled(Box)({
  display: "flex",
  flexDirection: "row",
  gap: "1rem",
});

export default function ObristanPassport({ passport }: ObristanPassportProps) {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          bgcolor: colors.obristan.secondaryText,
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: 2,
          px: 2,
        }}
      >
        <Marker />
        <Typography
          sx={{
            color: colors.paper,
            fontFamily: "EB Garamond, serif",
            fontSize: "3rem",
            textTransform: "uppercase",
            lineHeight: "1",
          }}
        >
          {passport.country}
        </Typography>
        <Marker />
      </Box>
      <Typography>{passport.getReversedName()}</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          bgcolor: colors.obristan.secondaryText,
          borderRadius: 2,
          color: colors.paper,
          px: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
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
            <Typography sx={{ textTransform: "uppercase" }}>
              {passport.id}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Photo height={180} />
        </Box>
      </Box>
    </Box>
  );
}
