"use client";

import { Box, Button, Typography } from "@mui/material";
import FlexBox from "../styled/FlexBox";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function GameOver() {
  const searchParams = useSearchParams();

  const day = Number(searchParams.get("day"));

  return (
    <FlexBox sx={{ flexDirection: "column" }}>
      <Typography variant="h2">День завершен!</Typography>
      <Button component={Link} href={`/guide?day=${day + 1}`}>
        Следующий день -{">"}
      </Button>
    </FlexBox>
  );
}
