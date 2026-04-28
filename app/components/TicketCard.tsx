import Ticket from "@/app/classes/Ticket";
import { Box, Typography } from "@mui/material";
import "@fontsource/ibm-plex-mono";

interface TicketCardProps {
  ticket: Ticket;
}

export default function TicketCard({ ticket }: TicketCardProps) {
  return (
    <Box
      sx={{
        width: 280,
        aspectRatio: 1.8,
        position: "relative",
        backgroundImage: "url(/ticket.png)",
        backgroundSize: "cover",
      }}
    >
      <Typography
        sx={{
          fontFamily: "IBM Plex Mono, arial",
          fontWeight: 700,
          fontSize: "0.9rem",
          color: "#776789",
          position: "absolute",
          bottom: 33,
          left: 167,
          userSelect: "none",
        }}
      >
        {ticket.date.toLocaleDateString()}
      </Typography>
    </Box>
  );
}
