module.exports = {
    extends: [
        "eslint:recommended"
    ].concat([
        "./rules/bestPractices",
        "./rules/es2015",
        "./rules/nodeJSAndCommonJS",
        "./rules/possibleErrors",
        "./rules/strictMode",
        "./rules/stylisticIssues",
        "./rules/variables"
    ].map(require.resolve))
}
