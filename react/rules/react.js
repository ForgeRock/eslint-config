module.exports = {
    rules: {
        "react/default-props-match-prop-types": "error",
        "react/display-name": "error",
        "react/forbid-component-props": "off", // We have nothing explicit we wish to forbid ATM
        "react/forbid-prop-types": "error",
        "react/no-array-index-key": "error",
        "react/no-children-prop": "error",
        "react/no-danger": "error",
        "react/no-danger-with-children": "error",
        "react/no-deprecated": "error",
        "react/no-did-mount-set-state": "error",
        "react/no-did-update-set-state": "error",
        "react/no-direct-mutation-state": "error",
        "react/no-find-dom-node": "error",
        "react/no-is-mounted": "error",
        "react/no-multi-comp": "error",
        "react/no-redundant-should-component-update": "error",
        "react/no-render-return-value": "error",
        "react/no-set-state": "off", // We require setState in our components
        "react/no-string-refs": "error",
        "react/no-unescaped-entities": "error",
        "react/no-unknown-property": "error",
        "react/no-unused-prop-types": ["error", {
            "skipShapeProps": true
        }],
        "react/prefer-es6-class": "error",
        "react/prefer-stateless-function": "error",
        "react/prop-types": "error",
        "react/react-in-jsx-scope": "error",
        "react/require-default-props": "off", // defaultsProps aren't currently used in our components
        "react/require-optimization": "off", // shouldComponentUpdate aren't current used in our components
        "react/require-render-return": "error",
        "react/self-closing-comp": "error",
        "react/sort-comp": "error",
        "react/sort-prop-types": "error",
        "react/style-prop-object": "error",
        "react/void-dom-elements-no-children": "off" // Does not work as of eslint-plugin-react 6.9.0
    }
};
