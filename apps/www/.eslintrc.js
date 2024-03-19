/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@eui/config/next.js", "plugin:storybook/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
