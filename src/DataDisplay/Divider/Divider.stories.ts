import type { Meta, StoryObj } from "@storybook/react";

import { Divider } from ".";

const meta = {
  title: "Data Display/Divider",
  component: Divider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: "Divider",
  },
};

export const Secondary: Story = {
  args: {
    label: "Divider",
  },
};
