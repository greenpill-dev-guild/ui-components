import React from "react";

import { Root, AvatarRootProps } from "./Base";

export interface AvatarProps extends AvatarRootProps {}

/** Primary UI component for user interaction */
export const Avatar = ({ ...props }: AvatarProps) => {
  return <Root {...props} />;
};
