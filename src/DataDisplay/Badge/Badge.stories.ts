import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from ".";

const meta = {
  title: "Data Display/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    // label: "Badge",
  },
};

export const Secondary: Story = {
  args: {
    // label: "Badge",
  },
};
