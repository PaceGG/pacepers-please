import { Box } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import colors from "@/data/colors.json";

export interface PhotoProps {
  width?: number | string;
  height?: number | string;
  bgcolor?: string;
  color?: string;
}

export default function Photo({
  width = 150,
  height = 200,
  bgcolor = "#ac9f9b",
  color = "#625252",
}: PhotoProps) {
  return (
    <Box
      sx={{
        width: width,
        height: height,
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: width,
        bgcolor: bgcolor,
        color: color,
      }}
    >
      <PersonIcon fontSize="inherit" />
    </Box>
  );
}
