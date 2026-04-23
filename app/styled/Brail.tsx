import { Box } from "@mui/material";

interface BrailProps {
  color?: string;
  size?: number;
}

export default function Brail({ color = "black", size = 30 }: BrailProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: size,
        height: size,
      }}
    >
      <Box sx={{ display: "flex", flex: 1 }}>
        <Box sx={{ bgcolor: color, flex: 1 }} />
        <Box sx={{ bgcolor: "transparent", flex: 1 }} />
        <Box sx={{ bgcolor: "transparent", flex: 1 }} />
      </Box>
      <Box sx={{ display: "flex", flex: 1 }}>
        <Box sx={{ bgcolor: "transparent", flex: 1 }} />
        <Box sx={{ bgcolor: color, flex: 1 }} />
        <Box sx={{ bgcolor: "transparent", flex: 1 }} />
      </Box>
      <Box sx={{ display: "flex", flex: 1 }}>
        <Box sx={{ bgcolor: color, flex: 1 }} />
        <Box sx={{ bgcolor: "transparent", flex: 1 }} />
        <Box sx={{ bgcolor: color, flex: 1 }} />
      </Box>
    </Box>
  );
}
