import React from "react";
import { RiCloudLine, RiSeedlingLine, RiTreeLine } from "@remixicon/react";
import { Root } from "./Base";
import { RiMapPinFill } from "@remixicon/react";
import { RiGroupFill } from "@remixicon/react";
import { RiSearchEyeLine } from "@remixicon/react";
import { RiAlertFill } from "@remixicon/react";
import { RiLeafFill } from "@remixicon/react";

export interface WorkCardProps {
  image: string;
  title: string;
  action: string;
  gardener: string;
  workStatus: string;
  description: string;
  speciesCounter: number;
  publishedDate: Date;
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const WorkCard = ({
  image,
  title,
  action,
  gardener,
  workStatus,
  description,
  speciesCounter,
  publishedDate,
  onClick,
  ...props
}: WorkCardProps) => {
  const formattedDate = new Date(publishedDate).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });

  const formattedTime = new Date(publishedDate).toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="inline-flex h-[376px] w-[358px] flex-col items-start justify-center overflow-hidden rounded-2xl border border-stroke-soft-200">
      <img
        className="h-36 self-stretch"
        src={image}
      />
      <div className="flex h-[232px] flex-col items-start justify-start gap-4 self-stretch p-4">
        <div className="flex h-[136px] flex-col items-start justify-start gap-2 self-stretch">
          <div className="self-stretch text-label-lg text-text-strong-950">
            {title}
          </div>
          <div className="inline-flex items-start justify-start gap-2">
            <div className="border-strok flex items-center justify-start gap-1 overflow-hidden rounded-md border bg-bg-white-0 py-1 pl-1 pr-2">
              <RiSearchEyeLine className="h-4 w-4 text-primary-base" />
              <div className="text-label-xs text-text-sub-600">{action}</div>
            </div>
            <div className="border-strok flex items-center justify-start gap-1 overflow-hidden rounded-md border bg-bg-white-0 py-1 pl-1 pr-2">
              <div className="flex h-4 w-4 items-center justify-center rounded-[999px] bg-[#ffecc0]">
                <img
                  className="h-4 w-4 rounded-[999px]"
                  src="https://picsum.photos/16/16"
                />
              </div>
              <div className="text-label-xs text-text-sub-600">{gardener}</div>
            </div>
          </div>
          <div className="inline-flex items-start justify-start gap-1 self-stretch">
          <div className="border-strok flex items-center justify-start gap-1 overflow-hidden rounded-md border bg-bg-white-0 py-1 pl-1 pr-2">
              <RiAlertFill className="h-4 w-4 text-warning-base" />
              <div className="text-label-xs text-text-sub-600">{workStatus}</div>
            </div>
            <div className="border-strok flex items-center justify-start gap-1 overflow-hidden rounded-md border bg-bg-white-0 py-1 pl-1 pr-2">
              <RiLeafFill className="h-4 w-4 text-primary-base" />
              <div className="text-label-xs text-text-sub-600">{speciesCounter}</div>
            </div>
          </div>
          <div className="self-stretch text-paragraph-sm text-text-strong-950">
            {description}
          </div>
        </div>
        <div className="inline-flex items-center justify-center gap-2 self-stretch">
          <div className="h-[0px] shrink grow basis-0 border border-stroke-soft-200"></div>
        </div>
        <div className="inline-flex items-center justify-between self-stretch">
          <div className="font-['Inter'] text-xs font-normal leading-none text-text-sub-600">
            Published on {formattedDate} at {formattedTime}
          </div>
          <div className="flex items-center justify-center gap-1 overflow-hidden rounded-lg bg-primary-base p-1.5">
            <div className="flex items-center justify-center px-1">
              <div className="font-['Inter'] text-sm font-medium leading-tight text-white">
                View Details
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
