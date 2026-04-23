import { useEffect, useRef, useState } from "react";
import bwipjs from "bwip-js";
import { Box } from "@mui/material";

interface BarCodeProps {
  text: string;
  color?: string;
  height?: number;
}

export default function App({
  color = "#000",
  text,
  height = 10,
}: BarCodeProps) {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas || !text) return;

    setLoading(true);

    try {
      bwipjs.toCanvas(canvas, {
        bcid: "code128",
        text,
        scale: window.devicePixelRatio,
        height,
        barcolor: color,
      });

      setLoading(false);
    } catch (e) {
      console.error("Barcode error:", e);
      setLoading(false);
    }
  }, [text, color, height]);

  return (
    <div
      style={{
        position: "relative",
        width: 40,
        height: 21,
        backgroundColor: loading ? color : "transparent",
        overflow: "hidden",
      }}
    >
      <canvas ref={ref} width={120} height={21} />
    </div>
  );
}
