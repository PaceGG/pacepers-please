"use client";

import {
  Box,
  Button,
  Chip,
  Collapse,
  LinearProgress,
  Typography,
} from "@mui/material";
import Pasport from "../../classes/Pasport";
import PasportCard from "../../components/PasportCard";
import { useParams, useRouter } from "next/navigation";
import FlexBox from "@/app/styled/FlexBox";
import RulesList from "@/app/components/Rules";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { useEffect, useState } from "react";
import { usePassportAnimation } from "@/app/hooks/usePasportAnimation";
import { motion, AnimatePresence } from "framer-motion";

import data from "@/data/data.json";
const rulesPerDay = data.rulesPerDay;
const peoplePerDay = data.peoplePerDay;

export default function Desk() {
  const router = useRouter();
  const params = useParams();
  const day = Number(params.day);

  const initialPasport: Pasport = new Pasport(day);
  const [currentPasport, setCurrentPasport] = useState<Pasport>(initialPasport);

  const totalPeople = peoplePerDay[day];
  const [successCount, setSuccessCount] = useState(0);
  const [errorsCount, setErrorsCount] = useState(0);

  const checkPasport = async (action: boolean) => {
    if (isProcessing) return;
    setIsProcessing(true);

    const valid = currentPasport.isValid(day);

    if (action) await triggerExit("down");
    else await triggerExit("left");

    if (valid === action) {
      setSuccessCount((prev) => prev + 1);
      triggerEnter();
      if (successCount + 1 === totalPeople) {
        setTimeout(() => {
          router.push(`/win?day=${day}`);
        }, 300);
      }
    } else if (errorsCount < 3) {
      setErrorsCount((prev) => prev + 1);
      triggerEnter();
    } else {
      router.push(`/gameOver?count=${successCount}&day=${day}`);
    }

    const newPasport = new Pasport(day);
    setCurrentPasport(newPasport);

    setTimeout(() => {
      setIsProcessing(false);
    }, 600);
  };

  const { direction, key, triggerEnter, triggerExit } = usePassportAnimation();

  const [isProcessing, setIsProcessing] = useState(false);

  return (
    <FlexBox sx={{ flexDirection: "column" }}>
      <FlexBox sx={{ gap: 1, alignItems: "center" }}>
        <Chip label={`${successCount}`} color="success" />
        <Box sx={{ flex: 1 }}>
          <LinearProgress
            variant="determinate"
            color="success"
            value={(successCount / totalPeople) * 100}
            sx={{
              borderRadius: 10,
              "& .MuiLinearProgress-bar": { borderRadius: 10 },
            }}
          />
        </Box>
        <Chip label={`${errorsCount}`} color="error" />
      </FlexBox>
      <FlexBox sx={{ flexDirection: "row" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={key}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={
              direction === "down"
                ? { opacity: 0, y: 200 }
                : direction === "left"
                  ? { opacity: 0, x: -200 }
                  : { opacity: 0 }
            }
            transition={{ duration: 0.4 }}
          >
            <PasportCard pasport={currentPasport} />
          </motion.div>
        </AnimatePresence>
        <RulesList rules={rulesPerDay[day]} />
      </FlexBox>
      <FlexBox>
        <Button
          sx={{ flex: 1 }}
          onClick={() => checkPasport(true)}
          disabled={isProcessing}
        >
          <CheckIcon /> Допуск
        </Button>
        <Button
          sx={{ flex: 1 }}
          color="error"
          onClick={() => checkPasport(false)}
          disabled={isProcessing}
        >
          <ClearIcon /> Отказ
        </Button>
      </FlexBox>
    </FlexBox>
  );
}
