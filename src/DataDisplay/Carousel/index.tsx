import React from "react";
import { clsx } from "clsx";

export interface CarouselProps {
  images: { src: string; alt: string }[];
  className?: string;
}

export const Carousel = ({ images, className }: CarouselProps) => {
  return (
    <ul className={clsx("carousel rounded-box w-64", className)}>
      {images.map((image, index) => (
        <li key={index}>
          <img src={image.src} alt={image.alt} />
        </li>
      ))}
    </ul>
  );
};
