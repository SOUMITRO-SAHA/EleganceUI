// adds tooltip context to all stories
import { TooltipProvider } from "@radix-ui/react-tooltip";
import type { Preview } from "@storybook/react";
import React from "react";

import "../styles/globals.css";
import "../styles/storybook-styles.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },

    globals: {
      locale: "en",
      locales: {
        en: "English",
      },
    },

    nextjs: {
      appDirectory: true,
    },
  },

  decorators: [
    (Story) => (
        <TooltipProvider>
            <div style={{ margin: "2rem" }}>
              <Story />
            </div>
        </TooltipProvider>
    ),
  ],
};

export default preview;

declare global {
  interface Window {
    getEmbedNamespace: () => string | null;
  }
}