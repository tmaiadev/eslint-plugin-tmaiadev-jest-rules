const { RuleTester } = require("eslint");
const itShouldRule = require("./enforce-it-should");

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2018,
  },
});

ruleTester.run("enforce-it-should", itShouldRule, {
  valid: [
    {
      code: 'it("should bar", () => {})',
    },
  ],
  invalid: [
    {
      code: 'it("bar", () => {})',
      errors: [
        {
          message:
            "Test blocks should start with 'should'. Eg.: it('should return true', () => {});",
        },
      ],
    },
  ],
});
