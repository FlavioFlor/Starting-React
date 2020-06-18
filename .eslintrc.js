module.exports = {
    "env": {
        "browser": true,
        "es2020": true
    },
    "extends": [
        "prettier",
        "prettier/standard",
        "plugin:prettier/recommended",
        "prettier/flowtype",
        "prettier/react",
        "plugin:react/recommended",
        "airbnb"
    ],
    "parser": 'babel-eslint',
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prettier"
    ],
    "rules": {
      "prettier/prettier": "error",
      "react/jsx-filename-extension": [
        "warn",{extensions: [".jsx", ".js"]}
      ],
      "import/prefer-default-export": "off",
      "react/state-in-constructor": "off",
      "react/static-property-placement": "off",
      "react/jsx-props-no-spreading": "off",
      "react/prop-types": "off",
      "no-param-reassign": "off",
      "no-console": "off"
    }
};
