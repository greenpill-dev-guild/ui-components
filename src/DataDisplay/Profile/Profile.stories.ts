import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Profile } from ".";


const meta = {
  title: "Data Display/Profile",
  component: Profile,
  parameters: {
    
    layout: "centered",
  },
 
  tags: ["autodocs"],

  argTypes: {
    avatar: { control: "text" },
    name: { control: "text" },
    phone: { control: "text" },
    location: { control: "text" },
    wallet: { control: "text" },
    email: { control: "text" },
    type: { control: "boolean" },
    registryDate: { control: "date" },
  },
 
  
} satisfies Meta<typeof Profile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Public: Story = {
  args: {
    avatar: "https://picsum.photos/188/188",
    name: "Palms.xyz",
    phone: "1 (312) 499 - 2983",
    location: "Kassanda, Uganda",
    wallet: "0x3f649DbFAFBE454940B8a82c5058b8d176dD3871",
    email: "palms@greenpill.builders",
    type: "public",
    registryDate: new Date(),
  }
}

export const Private: Story = {
  args: {
    avatar: "https://picsum.photos/188/188",
    name: "Palms.xyz",
    phone: "1 (312) 499 - 2983",
    location: "Kassanda, Uganda",
    wallet: "0x3f649DbFAFBE454940B8a82c5058b8d176dD3871",
    email: "palms@greenpill.builders",
    type: "private",
    registryDate: new Date(),
  }
}