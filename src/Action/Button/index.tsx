import React from "react";

import { Root, ButtonRootProps } from "./Base";

export interface ButtonProps extends ButtonRootProps {
  label: string;
}

/** Primary UI component for user interaction */
export const Button = ({ label, ...props }: ButtonProps) => {
  return <Root {...props}>{label}</Root>;
};
