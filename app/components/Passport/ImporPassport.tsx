import Passport from "@/app/classes/Passport";
import { Box, Typography } from "@mui/material";
import Photo from "../Photo";
import colors from "@/data/colors.json";
import { styled } from "@mui/material/styles";
import "@fontsource/ibm-plex-sans/700";

const Chip = styled(Typography)({
  backgroundColor: colors.impor.secondaryText,
  color: colors.paper,
  width: 40,
  padding: "0 5px",
  boxSizing: "content-box",
  textTransform: "uppercase",
});

interface ImporPassportProps {
  passport: Passport;
}

export default function ImporPassport({ passport }: ImporPassportProps) {
  return (
    <Box>
      <Box>
        <Typography>{passport.getReversedName()}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          border: `4px dashed ${colors.impor.primaryText}`,
          p: 0.5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box>
            <Photo
              height={200}
              color={colors.impor.primaryText}
              bgcolor={colors.impor.secondaryText}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              bgcolor: colors.impor.secondaryText,
              px: 1,
              marginRight: 1,
              borderLeft: `4px dashed ${colors.paper}`,
            }}
          >
            <Chip>род</Chip>
            <Chip>пол</Chip>
            <Chip>Выд</Chip>
            <Chip>До</Chip>
          </Box>
          <Box>
            <Typography>{passport.birth.toLocaleDateString()}</Typography>
            <Typography>{passport.sex}</Typography>
            <Typography>{passport.city}</Typography>
            <Typography>{passport.validUntil.toLocaleDateString()}</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            textTransform: "uppercase",
            alignItems: "center",
            px: 0.5,
          }}
        >
          <Typography
            sx={{
              color: colors.impor.secondaryText,
              fontFamily: "IBM Plex Sans",
              fontSize: "2rem",
            }}
          >
            IMPOR
          </Typography>
          <Typography>{passport.id}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
