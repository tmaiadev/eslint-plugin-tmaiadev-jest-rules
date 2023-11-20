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
        // ...
        "tmaiadev-jest-rules/enforce-gwt": "error",
        "tmaiadev-jest-rules/enforce-gwt-capitalized": "error",
        "tmaiadev-jest-rules/enforce-it-should": "error",
    },
}
```

# Examples

```js
describe('Given that the user has landed on the product page', () => {
    describe('When the user clicks on the buy button', () => {
       test('Then the product should be added to the shopping cart', () => {
            // ...  
       });
       
       describe('And the product has already been added on the shopping card', () => {
         test('Then the number of items of that product should be increased by 1', () => {
            // ... 
         });
       });
    });
});
```

```js
describe('Given `isDev()`', () => {
    it('should return true', () => {
        expect(isDev()).toBe(true);
    });
});
```