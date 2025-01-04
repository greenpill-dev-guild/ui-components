import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { AssessmentCard } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Data Display/AssessmentCard",
  component: AssessmentCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    title: { control: "text" },
    tags: { control: "text" },
    issues: { control: "text" },
    assessmentData: { control: "text" },
    publishedDate: { control: "date" },
  },
} satisfies Meta<typeof AssessmentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    title: "Assessment Title",
    tags: ["Urban Farming", "Educational", "Public", "+4"],
    issues: ["Soil Quality", "Plant Health", "Fertilization", "+6"],
    assessmentData: ["21", "-", "1.9 T", "3.8 T"],
    publishedDate: new Date(),
  },
};
