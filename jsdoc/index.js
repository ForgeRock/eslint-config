module.exports = {
    plugins: [
        "jsdoc"
    ],
    rules: {
        "jsdoc/check-param-names": "error",
        "jsdoc/check-tag-names": "error",
        "jsdoc/newline-after-description": ["error", "never"],
        "jsdoc/require-returns-type": "error",
        "jsdoc/valid-types": "error"
    }
}
