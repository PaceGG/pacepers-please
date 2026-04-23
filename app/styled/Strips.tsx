import { Box } from "@mui/material";

interface StripProps {
  thickness?: number | string;
  color?: string;
  gap?: number | string;
}

export default function Strips({
  thickness = "30%",
  color = "black",
  gap = 1,
}: StripProps) {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        gap,
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          bgcolor: color,
          width: "100%",
          height: thickness,
        }}
      />
      <Box sx={{ bgcolor: color, width: "100%", height: thickness }} />
      <Box sx={{ bgcolor: color, width: "100%", height: thickness }} />
    </Box>
  );
}
