import React from "react";

import { Root, LinkButtonProps } from "./Base";

export interface LinkProps extends LinkButtonProps {
  label: string;
}

export const Link = ({ label, ...props }: LinkProps) => {
  return <Root {...props}>{label}</Root>;
};
