import * as React from "react";
import type { FancyButtonProps, FancyButtonSharedProps } from "./Base";
import { Root as ButtonRoot, Icon as ButtonIcon } from "./Base";

export interface ButtonProps extends FancyButtonProps {
  /**
   * Primary content of the button.
   * If no children are provided, the label will be rendered.
   */
  label?: React.ReactNode;
  /**
   * An optional icon displayed at the start.
   */
  startIcon?: React.ReactElement;
  /**
   * An optional icon displayed at the end.
   */
  endIcon?: React.ReactElement;
  /**
   * Optional children to be rendered inside the button.
   */
  children?: React.ReactNode;
}

/**
 * A minimal Button component that leverages the base (Root and Icon) components.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { label, children, startIcon, endIcon, ...props },
    ref,
  ) => {
    const content = children || label;

    return (
      <ButtonRoot ref={ref} {...props}>
        {startIcon && <ButtonIcon>{startIcon}</ButtonIcon>}
        {content}
        {endIcon && <ButtonIcon>{endIcon}</ButtonIcon>}
      </ButtonRoot>
    );
  },
);
Button.displayName = "Button";