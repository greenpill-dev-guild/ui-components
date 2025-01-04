import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { GardenCard } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Data Display/Garden Card",
  component: GardenCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    title: { control: "text" },
    coverImage: { control: "text" },
    description: { control: "text" },
    gardenerCount: { control: "number" },
    gardenOperators: { control: "text" },
    location: { control: "text" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof GardenCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Full: Story = {
  args: {
    size: "default",
    title: "Public Lettuce Garden",
    coverImage: "https://picsum.photos/200/300",
    description: "We are building a lettuce garden for all locals having a organic and natural food easy and cheap",
    gardenerCount: 10,
    gardenOperators: ["afowefa.eth", "marcin.eth"],
    location: "Brasil",
  },
};

export const Compact: Story = {
  args: {
    size: "compact",
    title: "Public Lettuce Garden",
    coverImage: "https://picsum.photos/200/300",
    description: "We are building a lettuce garden for all locals having a organic and natural food easy and cheap",
    gardenerCount: 10,
    gardenOperators: ["afowefa.eth", "marcin.eth"],
    location: "New York",
  },
};