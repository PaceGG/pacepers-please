"use client";

import { Box, Button, Typography } from "@mui/material";
import FlexBox from "../styled/FlexBox";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function GameOver() {
  const searchParams = useSearchParams();

  const count = searchParams.get("count");
  const day = searchParams.get("day");

  return (
    <FlexBox sx={{ flexDirection: "column" }}>
      <Typography variant="h2">Игра окончена</Typography>
      <Typography>Вы проверили {count} человек</Typography>
      <FlexBox>
        <Button component={Link} href="/" sx={{ flex: 1 }} color="error">
          В главное меню
        </Button>
        <Button component={Link} href={`/desk/${day}`} sx={{ flex: 1 }}>
          Повторить
        </Button>
      </FlexBox>
    </FlexBox>
  );
}
