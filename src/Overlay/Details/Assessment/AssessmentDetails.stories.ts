import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import type { Specie } from "./index.tsx"; // Adjust the import path as necessary

import { AssessmentDetails } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Data Display/AssessmentDetails",
  component: AssessmentDetails,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    issues: { control: "text" },
    tags: { control: "text" },
    species: { control: "text" },
    medias: { control: "text" },
    assessmentData: { control: "text" },
    publishedDate: { control: "date" },
    remoteReport: { control: "date" },

  },
} satisfies Meta<typeof AssessmentDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    issues: ["Soil Quality", "Plant Health", "Fertilization", "Water Management", "Pest Control", "Crop Rotation", "Sunlight Needs"],
    tags: ["Urban Farming", "Educational", "Public", "Sustainable", "Organic", "Community"],
    medias: ["https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/200/300"],
    assessmentData: ["21", "-", "1.9 T", "3.8 T"],
    publishedDate: new Date(),
    species: [
      {
        name: "Leucaena leucocephala",
        image: "https://picsum.photos/16/16",
        type: "Weed"
      },
      {
        name: "Acacia dealbata",
        image: "https://picsum.photos/16/16",
        type: "Tree"
      },
      {
        name: "Eucalyptus globulus",
        image: "https://picsum.photos/16/16",
        type: "Tree"
      },
      {
        name: "Pinus radiata",
        image: "https://picsum.photos/16/16",
        type: "Tree"
      },
      {
        name: "Cynodon dactylon",
        image: "https://picsum.photos/16/16",
        type: "Grass"
      }
    ] as Specie[],
    remoteReport: "",
  },
};
