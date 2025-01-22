import React from "react";

import { Root, type TagRootProps } from "./Base";

export interface TagProps extends TagRootProps {}

/** Primary UI component for user interaction */
export const Tag = ({ ...props }: TagProps) => {
  return <Root {...props} />;
};
