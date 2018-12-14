module.exports = {
    extends: [
        "./rules/jsx",
        "./rules/react"
    ].map(require.resolve),
    plugins: [
        "react"
    ]
};
