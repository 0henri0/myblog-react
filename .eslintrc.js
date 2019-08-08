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
    "react/jsx-uses-react": 1,
  },
  "extends": [
    // "eslint:recommended",
    "plugin:react/recommended"
  ],
  "env": {
    "browser": true,
    "es6": true
  },
  "globals": {},
  "plugins": [
    "react"
  ],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": { "jsx": true }
  }
}