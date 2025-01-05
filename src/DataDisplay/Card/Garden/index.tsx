import React from "react";
import { RiGroupFill, RiMapPinFill } from "@remixicon/react";

export interface GardenCardProps {
  title: string;
  coverImage: string;
  gardenerCount: number;
  location: string;
  gardenOperators: string[];
  description?: string;
  size?: "default" | "compact";
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const GardenCard = ({
  title,
  coverImage,
  gardenerCount,
  location,
  gardenOperators,
  description,
  size,
  onClick,
}: GardenCardProps) => {
  /** Treating language context */
  const gardener = gardenerCount === 1 ? "Gardner" : "Gardners";

  return (
    <div>
      <div className="border-strok flex h-auto w-[358px] flex-col items-center justify-center self-stretch rounded-lg border bg-bg-white-0">
        <img
          className="h-[220px] self-stretch rounded-tl-lg rounded-tr-lg"
          src={coverImage}
          alt={title}
        />
        <div className="flex h-auto flex-col items-start justify-start gap-3 self-stretch rounded-bl-lg rounded-br-lg p-6">
          <div className="flex h-14 flex-col items-start justify-start gap-1 self-stretch">
            <div className="self-stretch font-sans text-title-h6 text-text-strong-950">
              {title}
            </div>

            <div className="inline-flex items-start justify-start gap-1 self-stretch">
              {/* Badge */}
              <div className="border-strok flex items-center justify-start gap-1 overflow-hidden rounded-md border bg-bg-white-0 py-1 pl-1 pr-2">
                <RiGroupFill className="h-4 w-4 text-primary-base" />
                <div className="text-label-xs text-text-sub-600">
                  {gardenerCount} {gardener}
                </div>
              </div>
              {/* Badge */}
              <div className="border-strok flex items-center justify-start gap-1 overflow-hidden rounded-md border bg-bg-white-0 py-1 pl-1 pr-2">
                <RiMapPinFill className="h-4 w-4 text-primary-base" />
                <div className="text-label-xs text-text-sub-600">
                  {location}
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-10 flex-col items-start justify-start gap-1 self-stretch">
            <div className="self-stretch text-subheading-2xs text-text-sub-600">
              OPERATORS
            </div>
            <div className="inline-flex items-start justify-start gap-1 self-stretch">
              <div className="border-strok flex items-center justify-start gap-1 overflow-hidden rounded-md border bg-bg-white-0 py-1 pl-1 pr-2">
                <div className="flex h-4 w-4 items-center justify-center rounded-[999px]">
                  <img
                    className="h-4 w-4 rounded-[999px]"
                    src="https://picsum.photos/16/16"
                  />
                </div>
                <div className="text-label-xs text-text-sub-600">
                  {gardenOperators[0]}
                </div>
              </div>
              <div className="border-strok flex items-center justify-start gap-1 overflow-hidden rounded-md border bg-bg-white-0 py-1 pl-1 pr-2">
                <div className="flex h-4 w-4 items-center justify-center rounded-[999px] bg-[#ffecc0]">
                  <img
                    className="h-4 w-4 rounded-[999px]"
                    src="https://picsum.photos/16/16"
                  />
                </div>
                <div className="text-label-xs text-text-sub-600">
                  {gardenOperators[1]}
                </div>
              </div>
            </div>
          </div>
          {size === "default" && (
            <p className="text-paragraph-sm text-text-sub-600">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};
