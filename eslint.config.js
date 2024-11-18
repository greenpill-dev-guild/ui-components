import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import storybook from "eslint-plugin-storybook";
import reactHooks from "eslint-plugin-react-hooks";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      "plugin:storybook/recommended",
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      storybook: storybook,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  }
);
