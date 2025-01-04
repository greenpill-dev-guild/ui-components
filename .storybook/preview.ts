import type { Preview } from "@storybook/react";

import "../src/index.css"; // replace with the name of your tailwind css file

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: true, // 👈 Enables the table of contents
    },
  },
  //👇 Enables auto-generated documentation for all stories
  tags: ["autodocs"],
};

export default preview;
