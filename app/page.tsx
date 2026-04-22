"use client";

import styled from "@emotion/styled";
import { Button, ButtonProps } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <Button component={Link} href="/guide?day=0" sx={{ py: 8, px: 16 }}>
      Начать
    </Button>
  );
}
