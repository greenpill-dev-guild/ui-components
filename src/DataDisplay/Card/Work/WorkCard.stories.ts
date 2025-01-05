import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { WorkCard } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Data Display/WorkCard",
  component: WorkCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    image: { control: "text" },
    title: { control: "text" },
    action: { control: "text" },
    gardener: { control: "text" },
    workStatus: { control: "text" },
    description: { control: "text" },
    speciesCounter: { control: "number" },
    publishedDate: { control: "date" },
  },
} satisfies Meta<typeof WorkCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    image: "https://picsum.photos/358/144",
    title: "Leucaena leucocephala",
    gardener: "afowefa.eth",
    action: "Identify Plants",
    workStatus: "Pending",
    description: "We cleaned up invasive species in a corner of the city of Rio Claro, we cleaned more than 16 roots.",
    speciesCounter: 32,
    publishedDate: new Date(),
  },
};
