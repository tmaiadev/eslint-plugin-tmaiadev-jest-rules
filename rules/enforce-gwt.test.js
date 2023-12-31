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
      code: 'describe("when bar", () => {})',
    },
    {
      code: 'describe("and qux", () => {})',
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
    {
      code: 'test("shoud foo", () => {})',
      errors: [
        {
          message: "Test blocks should start with 'Then'.",
        },
      ],
    },
  ],
});

console.log("enforce-gwt tests passed!");
