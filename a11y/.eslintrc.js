module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:jsx-a11y/strict"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 7,
        "sourceType": "module",
        "allowImportExportEverywhere": true
    },
    "plugins": [
        "react",
        "jsx-a11y"
    ],
    "rules": {
    }
};
