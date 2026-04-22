import {
  Box,
  Button,
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import FlexBox from "../styled/FlexBox";
import { useState } from "react";

export interface RulesListProps {
  rules: number[];
}

import data from "@/data/data.json";

const rulesList = data.rules;

export default function RulesList({ rules = [] }: RulesListProps) {
  const [open, setOpen] = useState(false);

  return (
    <FlexBox sx={{ position: "relative" }}>
      <Button color="primary" onClick={() => setOpen(!open)}>
        Правила
      </Button>
      <Collapse
        in={open}
        sx={{ position: "absolute", left: "110%" }}
        orientation="horizontal"
      >
        <Paper>
          <List dense>
            {rules.map((rule) => (
              <ListItem key={rule}>
                <ListItemIcon sx={{ minWidth: 20 }}>•</ListItemIcon>
                <ListItemText sx={{ whiteSpace: "nowrap" }}>
                  {rulesList[rule]}
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Paper>
      </Collapse>
    </FlexBox>
  );
}
