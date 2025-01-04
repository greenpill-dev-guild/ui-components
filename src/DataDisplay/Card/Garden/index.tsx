import React from "react";

export interface GardenCardProps {
  title: string;
  coverImage: string;
  gardenerCount: number;
  location: string;
  gardenOperators: string[];
  description?: string;
  variant?: "compact" | "full";
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
  variant = "full",
  onClick,
}: GardenCardProps) => {
  return (
    <div className="">
      <img className="" src={coverImage} alt={title} />
      <div>
        <h2 className="">{title}</h2>
        <div className="">
          <p>{gardenerCount} Gardener</p>
          <p>{location}</p>
        </div>
      </div>
      <div>
        <h3 className="">Operators</h3>
        <p>{gardenOperators.join(", ")}</p>
      </div>
      {description && <p>{description}</p>}
    </div>
  );
};
