module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Enfore it blocks to start with 'should' in their names.",
    },
  },
  create(context) {
    return {
      "CallExpression[callee.name='it'] > Literal": function (node) {
        if (!node.value.startsWith("should")) {
          context.report({
            node,
            message:
              "Test blocks should start with 'should'. Eg.: it('should return true', () => {});",
          });
        }
      },
    };
  },
};
