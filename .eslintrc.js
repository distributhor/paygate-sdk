module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
    commonjs: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },
  plugins: ["prettier"],
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  overrides: [
    {
      files: ["src/**/*.ts", "test/**/*.ts"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint", "prettier"],
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended",
      ],
      // "settings": {
      //     "import/parsers": {
      //         "@typescript-eslint/parser": [".ts"]
      //     },
      //     "import/resolver": {
      //         "typescript": {}
      //     }
      // },
      rules: {
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/explicit-module-boundary-types": [
          "error",
          {
            allowArgumentsExplicitlyTypedAsAny: true,
          },
        ],
      },
    },
  ],
};
