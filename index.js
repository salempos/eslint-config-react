module.exports = {
  extends: ["eslint-config-airbnb", "eslint-config-airbnb/hooks"].map(require.resolve),
  rules: {
    quotes: ["error", "double"],
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
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
  },
  settings: {
    "import/resolver": {
      webpack: {
        config: {
          resolve: {
            modules: ["node_modules"],
          },
        },
      },
    },
  },
};
