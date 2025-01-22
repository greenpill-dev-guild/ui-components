import React from "react";

import { Root } from "./Base";

export interface DividerProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: "small" | "medium" | "large";
  /** Divider contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Divider = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: DividerProps) => {
  return <Root {...props}>{label}</Root>;
};
