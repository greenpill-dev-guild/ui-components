import React from "react";
import { RiGroupFill, RiMapPinFill } from "@remixicon/react";
import { Root, StatusBadgeRootProps } from "./Base";

export interface BadgeProps extends StatusBadgeRootProps { }

/** Primary UI component for user interaction */
export const Badge = ({...props }: BadgeProps) => {
  return (
      <div className="border-strok flex items-center justify-start gap-1 overflow-hidden rounded-md border bg-bg-white-0 py-1 pl-1 pr-2">
        <RiGroupFill className="h-4 w-4 text-primary-base" />
        <div className="text-label-xs text-text-sub-600">
          test
        </div>
      </div>
  );
};
