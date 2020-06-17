module.exports = {
    "env": {
        "browser": true,
        "es2020": true
    },
    "extends": [
        "plugin:react/recommended",
        "prettier",
        "prettier/react",
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
        "warn",{extensions: [".js", ".js"]}
      ],
      "import/prefer-default-export": "off"
    }
};
