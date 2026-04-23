export default function Hr({
  height = 12,
  color = "#000",
  gap = 10,
  strokeWidth = 8,
  skew = -20,
  margin = "0",
}) {
  return (
    <div
      style={{
        width: "100%",
        height,
        margin,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `repeating-linear-gradient(
            45deg,
            ${color} 0px,
            ${color} ${strokeWidth}px,
            transparent ${strokeWidth}px,
            transparent ${strokeWidth + gap}px
          )`,
          transform: `skew(${skew}deg)`,
        }}
      />
    </div>
  );
}
