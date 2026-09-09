import React from "react";

export interface ArvantoLogoMarkProps extends React.SVGProps<SVGSVGElement> {
  variant?: "dark" | "white" | "primary" | "current";
  size?: number | string;
  className?: string;
}

export function ArvantoLogoMark({
  variant = "current",
  size = 32,
  className = "",
  ...props
}: ArvantoLogoMarkProps) {
  let fillColor = "currentColor";
  if (variant === "dark") fillColor = "#0F172A";
  if (variant === "white") fillColor = "#FFFFFF";
  if (variant === "primary") fillColor = "#0284C7";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Arvanto Stacked Building Logo Mark"
      role="img"
      {...props}
    >
      {/* 
        Concept #8: Stacked Building Architectural Mark
        3 horizontally stacked geometric building layers:
        - Top layer (Apex): x=10, y=4, w=12, h=6
        - Middle layer (Core): x=6, y=13, w=20, h=6
        - Bottom layer (Foundation): x=2, y=22, w=28, h=6
      */}
      <rect x="10" y="4" width="12" height="6" rx="1.5" fill={fillColor} />
      <rect x="6" y="13" width="20" height="6" rx="1.5" fill={fillColor} />
      <rect x="2" y="22" width="28" height="6" rx="1.5" fill={fillColor} />
    </svg>
  );
}
