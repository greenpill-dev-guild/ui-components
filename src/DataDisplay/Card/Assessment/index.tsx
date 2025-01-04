import React from "react";
import { RiCloudLine, RiSeedlingLine, RiTreeLine } from "@remixicon/react";
import { Root } from "./Base";

export interface AssessmentCardProps {
  title: string;
  tags: string[];
  issues: string[];
  assessmentData: string[];
  publishedDate: Date;
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const AssessmentCard = ({
  title,
  tags,
  issues,
  assessmentData,
  publishedDate,
  ...props
}: AssessmentCardProps) => {
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
    <div className="inline-flex h-[372px] w-[358px] flex-col items-start justify-center gap-4 rounded-2xl border border-stroke-soft-200 bg-bg-white-0 p-6">
      <div className="flex h-32 flex-col items-start justify-start gap-2 self-stretch">
        <div className="inline-flex items-center justify-start gap-2 self-stretch">
          <div className="text-label-xl text-text-strong-950">{title}</div>
        </div>
        <div className="flex h-[88px] flex-col items-start justify-start gap-2 self-stretch">
          <div className="flex h-10 flex-col items-start justify-center gap-2 self-stretch">
            <div className="font-['Inter'] text-[11px] font-medium uppercase leading-3 tracking-tight text-text-sub-600">
              tags
            </div>
            <div className="inline-flex items-start justify-start gap-1 self-stretch">
              <div className="flex items-center justify-center gap-0.5 overflow-hidden whitespace-nowrap rounded-[999px] bg-success-light px-2 py-0.5">
                <div className="text-label-sm leading-none text-success-dark">
                  {tags[0]}
                </div>
              </div>
              <div className="flex items-center justify-center gap-0.5 overflow-hidden whitespace-nowrap rounded-[999px] bg-success-light px-2 py-0.5">
                <div className="text-label-sm leading-none text-success-dark">
                  {tags[1]}
                </div>
              </div>
              <div className="flex items-center justify-center gap-0.5 overflow-hidden whitespace-nowrap rounded-[999px] bg-success-light px-2 py-0.5">
                <div className="text-label-sm leading-none text-success-dark">
                  {tags[2]}
                </div>
              </div>
              <div className="flex items-center justify-center gap-0.5 overflow-hidden whitespace-nowrap rounded-[999px] bg-success-light px-2 py-0.5">
                <div className="text-label-sm leading-none text-success-dark">
                  {tags[3]}
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-10 flex-col items-start justify-center gap-2 self-stretch">
            <div className="font-['Inter'] text-[11px] font-medium uppercase leading-3 tracking-tight text-text-sub-600">
              issues
            </div>
            <div className="inline-flex items-start justify-start gap-1 self-stretch">
              <div className="flex items-center justify-center gap-0.5 overflow-hidden whitespace-nowrap rounded-[999px] bg-[#c0eaff] px-2 py-0.5">
                <div className="text-label-sm leading-none text-[#124b68]">
                  {issues[0]}
                </div>
              </div>
              <div className="flex items-center justify-center gap-0.5 overflow-hidden whitespace-nowrap rounded-[999px] bg-[#c0eaff] px-2 py-0.5">
                <div className="text-label-sm leading-none text-[#124b68]">
                  {issues[1]}
                </div>
              </div>
              <div className="flex items-center justify-center gap-0.5 overflow-hidden whitespace-nowrap rounded-[999px] bg-[#c0eaff] px-2 py-0.5">
                <div className="text-label-sm leading-none text-[#124b68]">
                  {issues[2]}
                </div>
              </div>
              <div className="flex items-center justify-center gap-0.5 overflow-hidden whitespace-nowrap rounded-[999px] bg-[#c0eaff] px-2 py-0.5">
                <div className="text-label-sm leading-none text-[#124b68]">
                  {issues[3]}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="inline-flex items-center justify-center gap-2 self-stretch">
        <div className="h-[0px] shrink grow basis-0 border border-stroke-soft-200"></div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="inline-flex w-full flex-col items-start justify-start rounded-lg">
          <div className="inline-flex items-center justify-start gap-1">
            <RiTreeLine className="h-4 w-4 text-primary-base" />
            <div className="text-label-sm leading-none text-text-sub-600">
              Species Observed
            </div>
          </div>
          <div className="self-stretch font-['Inter'] text-base font-medium leading-normal text-[#0d111b]">
            {assessmentData[0]}
          </div>
        </div>
        <div className="inline-flex w-full flex-col items-start justify-start rounded-lg">
          <div className="inline-flex items-center justify-start gap-1">
            <RiSeedlingLine className="h-4 w-4 text-primary-base" />
            <div className="text-label-sm leading-none text-text-sub-600">
              Soil Moisture
            </div>
          </div>
          <div className="self-stretch font-['Inter'] text-base font-medium leading-normal text-[#0d111b]">
            {assessmentData[1]}
          </div>
        </div>
        <div className="inline-flex w-full flex-col items-start justify-start rounded-lg">
          <div className="inline-flex items-center justify-start gap-1">
            <RiCloudLine className="h-4 w-4 text-primary-base" />
            <div className="text-label-sm leading-none text-text-sub-600">
              Carbon Ton Stock
            </div>
          </div>
          <div className="self-stretch font-['Inter'] text-base font-medium leading-normal text-[#0d111b]">
            {assessmentData[2]}
          </div>
        </div>
        <div className="inline-flex w-full flex-col items-start justify-start rounded-lg">
          <div className="inline-flex items-center justify-start gap-1">
            <RiCloudLine className="h-4 w-4 text-primary-base" />
            <div className="text-label-sm leading-none text-text-sub-600">
              Carbon Ton Potential
            </div>
          </div>
          <div className="self-stretch font-['Inter'] text-base font-medium leading-normal text-[#0d111b]">
            {assessmentData[3]}
          </div>
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
  );
};
