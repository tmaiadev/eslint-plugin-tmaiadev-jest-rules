# ESLint Plugin TMaiaDev Jest Rules

This ESLint Plugin will enforce your Jest tests to follow the "Given When Then" and the "it should" patterns.

## Setup

1. Install the dependency

```
npm install eslint-plugin-tmaiadev-jest-rules --save-dev
```

2. Configure your .eslintrc file by adding the plugin to the plugins array, and the rules you want to the rules object.

```js
{
    // ...
    plugins: [
        // ...
        "eslint-plugin-tmaiadev-jest-rules",
    ],
    rules: {
        "tmaiadev-jest-rules/enforce-gwt": "error",
        "tmaiadev-jest-rules/enforce-it-should": "error",
    },
}
```