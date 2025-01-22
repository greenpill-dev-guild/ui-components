import React from "react";

import { Root, StatusBadgeRootProps } from "./Base";

export interface BadgeProps extends StatusBadgeRootProps {}

/** Primary UI component for user interaction */
export const Badge = ({ ...props }: BadgeProps) => {
  return <Root {...props} />;
};
