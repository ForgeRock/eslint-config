module.exports = {
    rules: {
        "array-bracket-spacing": ["error", "never"],
        "block-spacing": ["error", "always"],
        "brace-style": ["error", "1tbs", {
            "allowSingleLine": true
        }],
        "camelcase": ["error", {
            "properties": "always"
        }],
        "comma-dangle": "error",
        "comma-spacing": ["error", {
            "before": false,
            "after": true
        }],
        "comma-style": "error",
        "one-var": ["error", {
            const: "never",
            let: "never",
            var: "always"
        }],
        "eol-last": "error",
        "indent": ["error", 4, {
            "SwitchCase": 1,
            "VariableDeclarator": 1
        }],
        "jsx-quotes": "error",
        "keyword-spacing": "error",
        "max-len": ["error", 120, 4, {
            "ignoreComments": true
        }],
        "new-cap": ["error", {
            "capIsNew": false
        }],
        "new-parens": "error",
        "no-array-constructor": "error",
        "no-bitwise": "error",
        "no-continue": "error",
        "no-lonely-if": "error",
        "no-multiple-empty-lines": ["error", {
            "max": 1,
            "maxBOF": 0,
            "maxEOF": 0
        }],
        "no-negated-condition": "error",
        "no-new-object": "error",
        "no-trailing-spaces": "error",
        "no-unneeded-ternary": "error",
        "no-whitespace-before-property": "error",
        "object-curly-spacing": ["error", "always"],
        "operator-linebreak": "error",
        "padded-blocks": ["error", "never"],
        "quote-props": ["error", "as-needed", {
            "keywords": true,
            "unnecessary": false
        }],
        "quotes": ["error", "double", "avoid-escape"],
        "semi": "error",
        "semi-spacing": ["error", {
            "before": false,
            "after": true
        }],
        "space-before-blocks": ["error", "always"],
        "space-before-function-paren": ["error", "always"],
        "space-in-parens": ["error", "never"],
        "space-infix-ops": ["error", {
            "int32Hint": false
        }],
        "space-unary-ops": "error",
        "switch-colon-spacing": "error"
    }
};
