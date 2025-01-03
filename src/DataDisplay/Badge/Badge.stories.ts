import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Badge } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Action/Badge",
  component: Badge,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: "Badge",
  },
};

export const Secondary: Story = {
  args: {
    label: "Badge",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Badge",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Badge",
  },
};

export const Card: Story = {
  args: {
    primary: false,
    label: "Badge",
  },
};
