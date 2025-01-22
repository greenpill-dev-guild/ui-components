import type { Meta, StoryObj } from "@storybook/react";

import { Carousel } from ".";

const meta = {
  title: "Data Display/Carousel",
  component: Carousel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    className: { control: "text" },
  },
  args: {},
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    images: [
      { src: "https://placehold.co/400x400", alt: "Image 1" },
      { src: "https://placehold.co/400x400", alt: "Image 2" },
      { src: "https://placehold.co/400x400", alt: "Image 3" },
    ],
  },
};

export const Secondary: Story = {
  args: {
    images: [
      { src: "https://placehold.co/400x400", alt: "Image 1" },
      { src: "https://placehold.co/400x400", alt: "Image 2" },
      { src: "https://placehold.co/400x400", alt: "Image 3" },
    ],
  },
};
