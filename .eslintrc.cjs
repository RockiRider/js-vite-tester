module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "airbnb",
    "prettier",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "import/extensions": [
      "error",
      {
        js: "never",
        jsx: "never",
        json: "ignorePackages",
      },
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
      },
    ],
    "react/jsx-props-no-spreading": 0,
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
  },
  settings: {
    "import/resolver": {
      alias: {
        map: [["@", "./src"]],
        extensions: [".js", ".jsx"],
        moduleDirectory: ["node_modules"],
      },
    },
  },
};
