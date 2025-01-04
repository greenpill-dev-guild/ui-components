import React from "react";

export interface AssessmentDialogProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: "small" | "medium" | "large";
  /** AssessmentDialog contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const AssessmentDialog = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: AssessmentDialogProps) => {
  return <div>{label}</div>;
};
