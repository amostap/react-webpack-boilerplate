module.exports = {
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    }
  },
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "plugins": [
    "react"
  ],
  globals: {
    "Promise": true,
    "React": true,
    "Symbol": true,
    "WeakSet": true
  },
  "rules": {
    // eslint:recommended EXTENDS
    "arrow-parens": [1, "as-needed"],
    "arrow-spacing": 2,
    "block-spacing": 1,
    "comma-dangle": [2, "never"],
    "comma-spacing": 1,
    "eol-last": [2, "always"],
    "jsx-quotes": [2, "prefer-double"],
    "new-cap": 0,
    "no-console": 1,
    "no-debugger": 1,
    "no-extra-semi": 2,
    "no-labels": 2,
    "no-mixed-spaces-and-tabs": 2,
    "no-multi-spaces": 1,
    "no-multiple-empty-lines": ["warn", { max: 1, maxEOF: 1 }],
    "no-trailing-spaces": [2, {"skipBlankLines": true}],
    "no-unreachable": 2,
    "no-use-before-define": 2,
    "object-curly-spacing": [2, "always"],
    "prefer-const": 2,
    "quotes": [2, "single", "avoid-escape"],
    "semi": [2, "always"],
    "space-before-blocks": 1,
    "space-infix-ops": [2, {"int32Hint": true}],
    "strict": 2,
    "valid-typeof": 2,
    // plugin:react/recommended EXTENDS
    "react/jsx-boolean-value": [1, "never"],
    "react/jsx-closing-bracket-location": [1, "tag-aligned"],
    "react/jsx-curly-spacing": [1, {"when": "never", "allowMultiline": false}],
    "react/jsx-equals-spacing": [1, "never"],
    "react/jsx-first-prop-new-line": [2, "multiline"],
    "react/jsx-indent-props": [1, 2],
    "react/jsx-indent": [1, 2],
    "react/jsx-no-duplicate-props": 1,
    "react/jsx-no-undef": 1,
    "react/jsx-space-before-closing": [2, "always"],
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    "react/jsx-wrap-multilines": 1,
    "react/no-danger": 1,
    "react/no-string-refs": 0,
    "react/prefer-es6-class": 2,
    "react/prop-types": 1,
    "react/self-closing-comp": 1,
    "react/sort-comp": 1
  }
};
