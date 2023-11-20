const { RuleTester } = require("eslint");
const rule = require("./enforce-gwt-capitalized");

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2018,
  },
});

ruleTester.run("enforce-gwt-capitalized", rule, {
  valid: [
    {
      code: `
        describe('When foo', () => {
            describe('And bar', () => {
                test('Then baz', () => {});
            });
        });
      `,
    },
  ],
  invalid: [
    {
      code: `describe('when foo', () => {});`,
      output: 'describe("When foo", () => {});',
      errors: [
        {
          message: `Description blocks should be capitalized. Use 'When' and 'And' instead of 'when' and 'and'.`,
        },
      ],
    },
    {
      code: `describe('and foo', () => {});`,
      output: 'describe("And foo", () => {});',
      errors: [
        {
          message: `Description blocks should be capitalized. Use 'When' and 'And' instead of 'when' and 'and'.`,
        },
      ],
    },
    {
      code: `test('then bar', () => {});`,
      output: `test("Then bar", () => {});`,
      errors: [
        {
          message: `Test blocks should be capitalized. Use 'Then' instead of 'then'.`,
        },
      ],
    },
  ],
});

console.log("enforce-gwt-capitalized tests passed!");
