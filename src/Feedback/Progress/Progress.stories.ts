import type { Meta, StoryObj } from "@storybook/react";

import { Progress } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Feedback/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: { control: "number" },
    max: { control: "number" },
    color: { control: "color" },
  },
  args: {},
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    value: 50,
    max: 100,
    color: "blue",
  },
};

export const Secondary: Story = {
  args: {
    value: 50,
    max: 100,
    color: "red",
  },
};
