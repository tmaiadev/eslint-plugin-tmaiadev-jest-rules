const { RuleTester } = require("eslint");
const gwtRule = require("./enforce-gwt");

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2018,
  },
});

ruleTester.run("enforce-gwt", gwtRule, {
  valid: [
    {
      code: 'describe("Given `foo`", () => {})',
    },
    {
      code: 'describe("When bar", () => {})',
    },
    {
      code: 'describe("And qux", () => {})',
    },
  ],
  invalid: [
    {
      code: 'describe("A foo", () => {})',
      errors: [
        {
          message:
            "Description blocks should start with 'Given', 'When' or 'And'.",
        },
      ],
    },
  ],
});

console.log("All tests passed!");
