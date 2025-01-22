import React from "react";

import { Root } from "./Base";

export interface ProgressProps {
  color?: "blue" | "green" | "red" | "orange";
  value: number;
  max?: number;
  className?: string;
}

/** Primary UI component for user interaction */
export const Progress = ({
  color = "blue",
  value,
  max,
  ...props
}: ProgressProps) => {
  return <Root {...props} color={color} value={value} max={max} />;
};
