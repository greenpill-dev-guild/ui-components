import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Avatar } from ".";

const meta = {
  title: "Data Display/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    // label: "Avatar",
  },
};

export const Secondary: Story = {
  args: {
    // label: "Avatar",
  },
};
