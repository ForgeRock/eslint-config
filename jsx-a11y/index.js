module.exports = {
    "extends": [
        "plugin:jsx-a11y/recommended"
    ],
    plugins: [
        "jsx-a11y"
    ],
    rules: {
        "jsx-a11y/label-has-for": ["error", {
            "required": "id"
        }]
    }
}
