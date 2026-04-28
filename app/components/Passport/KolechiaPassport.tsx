import Passport from "@/app/classes/Passport";
import { Box, Typography } from "@mui/material";
import DashedHr from "@/app/styled/DashedHr";
import "@fontsource/eb-garamond/700";

import colors from "@/data/colors.json";
import { styled } from "@mui/material/styles";
import Photo from "../Photo";

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

interface KolechiaPassportProps {
  passport: Passport;
}

export default function KolechiaPassport({ passport }: KolechiaPassportProps) {
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "flex-end", gap: 1 }}>
        <DashedHr
          height={6}
          color={colors.kolechia.secondaryText}
          gap={4}
          strokeWidth={12}
          skew={115}
        />
        <Typography
          sx={{
            fontFamily: "EB Garamond, serif",
            fontSize: "2.5rem",
            color: colors.kolechia.secondaryText,
            letterSpacing: 4,
            lineHeight: "2rem",
          }}
        >
          KOLECHIA
        </Typography>
      </Box>
      <Typography>{passport.getReversedName()}</Typography>
      <Box sx={{ display: "flex", gap: 1 }}>
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
          <Box>
            <DashedHr
              height={6}
              color={colors.kolechia.secondaryText}
              gap={4}
              strokeWidth={12}
              skew={115}
              margin="1rem 0 0 0"
            />
            <Typography
              sx={{
                textAlign: "right",
                textTransform: "uppercase",
                marginRight: 2,
              }}
            >
              {passport.id}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
