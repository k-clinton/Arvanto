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
  if (variant === "dark") fillColor = "#1E293B";
  if (variant === "white") fillColor = "#FFFFFF";
  if (variant === "primary") fillColor = "#0284C7";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Arvanto Stacked Building Logo Mark"
      role="img"
      {...props}
    >
      {/* Top Layer */}
      <path d="M4 13.5 L18 5 L32 13.5 V17.5 L18 9 L4 17.5 Z" fill={fillColor} />
      {/* Middle Layer */}
      <path d="M4 19.5 L18 11 L32 19.5 V23.5 L18 15 L4 23.5 Z" fill={fillColor} />
      {/* Bottom Layer with Flat Base */}
      <path d="M4 25.5 L18 17 L32 25.5 V31 H4 Z" fill={fillColor} />
    </svg>
  );
}
