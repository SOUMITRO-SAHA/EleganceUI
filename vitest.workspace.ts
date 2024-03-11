import { defineWorkspace } from "vitest/config";

// defineWorkspace provides a nice type hinting DX
const workspaces = [
      {
        test: {
          globals: true,
          name: "ui/components",
          include: ["packages/ui/components/**/*.{test}.{ts,js,tsx}"],
          environment: "jsdom",
          setupFiles: ["packages/ui/components/test-setup.ts"],
        },
      }
    ];

export default defineWorkspace(workspaces);
