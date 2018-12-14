module.exports = {
    rules: {
        "no-console": "off", // Alternative required before enabling this. See OPENAM-10938.
        "no-template-curly-in-string": "error",
        "no-unsafe-negation": "error",
        "valid-jsdoc": ["error", {
            "prefer": {
                "return": "returns"
            },
            "requireReturn": false
        }]
    }
};
