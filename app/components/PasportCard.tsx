"use client";

import {
  Box,
  BoxProps,
  Paper,
  Typography,
  TypographyProps,
} from "@mui/material";
import styled from "@emotion/styled";
import Pasport from "../classes/Pasport";
import FlexBox from "../styled/FlexBox";

export interface PasportProps {
  pasport: Pasport;
}

const Blank = styled(Typography)<TypographyProps>({
  flex: 1,
  borderBottom: "1px solid black",
  paddingLeft: 8,
});

export default function PasportCard({ pasport }: PasportProps) {
  return (
    <Paper sx={{ minWidth: 300, p: 2 }}>
      <FlexBox>
        <Typography>Name</Typography> <Blank>{pasport.name}</Blank>
      </FlexBox>
      <FlexBox>
        <Typography>Country</Typography> <Blank>{pasport.country}</Blank>
      </FlexBox>
      <FlexBox>
        <Typography>Birth</Typography>{" "}
        <Blank>{pasport.birth.toLocaleDateString()}</Blank>
      </FlexBox>
      <FlexBox>
        <Typography>Valid Until</Typography>{" "}
        <Blank>{pasport.validUntil.toLocaleDateString()}</Blank>
      </FlexBox>
    </Paper>
  );
}
