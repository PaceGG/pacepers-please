"use client";

import { Box, Button } from "@mui/material";
import Link from "next/link";
import React from "react";

function DevOnlyComponent() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <Button component={Link} href="/dev/pasport" color="primary">
        Паспорт
      </Button>
      <Button component={Link} href="/dev/idcard" color="primary">
        ID Карта
      </Button>
      <Button component={Link} href="/dev/diplomatic" color="primary">
        Диполматический статус
      </Button>
      <Button component={Link} href="/dev/ticket" color="primary">
        Пропуск
      </Button>
      <Button component={Link} href="/dev/visa" color="primary">
        Виза
      </Button>
    </Box>
  );
}

export default function DevLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        height: "80vh",
      }}
    >
      <DevOnlyComponent />
      {children}
    </Box>
  );
}
