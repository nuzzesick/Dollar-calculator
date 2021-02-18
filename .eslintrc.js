/* eslint-disable no-undef */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  overrides: [
    {
      files: ["**/*.js?(x)"],
      rules: {
        "no-console": "off",
      },
    },
  ],
  extends: ["eslint:recommended", "plugin:react/recommended", "react-app", "react-app/jest"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {},
};
