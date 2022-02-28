module.exports = {
  extends: ["react-app", "airbnb", "airbnb-typescript", "plugin:import/typescript"],
  rules: {
    quotes: ["error", "double"],
    "@typescript-eslint/quotes": ["error", "double"],
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
    "react/jsx-one-expression-per-line": "off",
    "implicit-arrow-linebreak": "off",
    "import/prefer-default-export": "off",
    camelcase: "off",
    "object-curly-newline": ["error", {
      ObjectExpression: { minProperties: 6, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 6, multiline: true, consistent: true },
      ImportDeclaration: { minProperties: 6, multiline: true, consistent: true },
      ExportDeclaration: { minProperties: 6, multiline: true, consistent: true },
    }],
    "react/jsx-props-no-spreading": "off",
    "react/forbid-prop-types": ["error", {
      forbid: ["any"],
      checkContextTypes: true,
      checkChildContextTypes: true,
    }],
    "react/require-default-props": "off",
    "react-hooks/exhaustive-deps": "off",
    "react/no-array-index-key": "warn",
    "react/react-in-jsx-scope": "off", // React 17 required
    "@typescript-eslint/naming-convention": "off",
  },
  settings: {
    "import/resolver": {
      webpack: {
        config: {
          resolve: {
            modules: ["node_modules", "src"],
          },
        },
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  parserOptions: {
    project: './tsconfig.json'
  }
};
