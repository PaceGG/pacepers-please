"use client";

import { Box, Button, Paper, Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";
import FlexBox from "../styled/FlexBox";
import Link from "next/link";
import data from "@/data/data.json";

const guidesList = data.guides;

export default function Guide() {
  const params = useSearchParams();

  const day = Number(params.get("day"));

  return (
    <FlexBox sx={{ flexDirection: "column" }}>
      <Paper sx={{ padding: 3, maxWidth: 500 }}>
        <Typography variant="h2">День {day}</Typography>
        <Typography sx={{ textAlign: "justify" }}>{guidesList[day]}</Typography>
      </Paper>
      <Button component={Link} href={`/desk/${day}`}>
        начать
      </Button>
    </FlexBox>
  );
}
