module.exports = {
  "rules": {
    "semi": [
      1,
      "always"
    ],
    "quotes": [
      1,
      "single"
    ],
    "react/jsx-uses-react": 0,
    "react/react-in-jsx-scope": 0,
    "no-undef": 0,
    "no-unused-vars": 1,
    "no-console": 1,
    "react/no-unknown-property": 0,
    "react/prop-types": 0,
    "react/display-name": 0,

  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
  },
  "globals": {},
  "plugins": [
    "react"
  ],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": { "jsx": true }
  },
  "parser": "babel-eslint",
}