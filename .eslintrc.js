module.exports = {
    "plugins": ["jest"],
    "env": {
        "commonjs": true,
        "node": true,
        "es6": true,
        "jest/globals": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2020,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
    },
};
