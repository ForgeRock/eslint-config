module.exports = {
    plugins: [
        "filenames"
    ],
    rules: {
        "filenames/match-exported": "error",
        "filenames/match-regex": "off", // There is no global filename convention
        "filenames/no-index": "off" // Index files are OK
    }
}
