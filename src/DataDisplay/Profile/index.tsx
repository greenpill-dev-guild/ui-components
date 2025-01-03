import React from "react";

import { Root } from "./Base";

export interface ProfileProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: "small" | "medium" | "large";
  /** Profile contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Profile = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ProfileProps) => {
  return (
    <Root
      // type="button"
      // className={["storybook-button", `storybook-button--${size}`, mode].join(
      //   " "
      // )}
      // style={{ backgroundColor }}

      variant="neutral"
      {...props}
    >
      {label}
    </Root>
  );
};