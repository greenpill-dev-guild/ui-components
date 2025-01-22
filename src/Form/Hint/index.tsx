import React from "react";

import { Root, HintRootProps } from "./Base";

export interface HintProps extends HintRootProps {
  hasError?: boolean;
  disabled?: boolean;
}

/** Primary UI component for user interaction */
export const Hint = ({ hasError, disabled, ...props }: HintProps) => {
  return <Root {...props} hasError={hasError} disabled={disabled} />;
};
