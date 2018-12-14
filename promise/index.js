module.exports = {
    plugins: [
        "promise"
    ],
    rules: {
        "promise/always-return": "warn",
        "promise/avoid-new": "off", // Promise is polyfilled
        "promise/catch-or-return": "warn",
        "promise/no-callback-in-promise": "warn",
        "promise/no-native": "off", // Promise is polyfilled
        "promise/no-nesting": "warn",
        "promise/no-new-statics": "error",
        "promise/no-promise-in-callback": "warn",
        "promise/no-return-in-finally": "error",
        "promise/no-return-wrap": "error",
        "promise/param-names": "error",
        "promise/prefer-await-to-callbacks": "off", // async/await is supported but not used widely at present
        "promise/prefer-await-to-then": "off", // async/await is supported but not used widely at present
        "promise/valid-params": "error"
    }
}
