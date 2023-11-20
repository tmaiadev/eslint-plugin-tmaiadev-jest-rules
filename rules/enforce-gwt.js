module.exports = {
  meta: {
    type: "problem",
    docs: {
      description:
        "Enfore descrition blocks to use 'Given/When/Then' pattern in their names.",
    },
  },
  create(context) {
    return {
      "CallExpression[callee.name='describe'] > Literal": function (node) {
        if (
          !node.value.startsWith("Given ") &&
          !/^when /i.test(node.value) &&
          !/^and /i.test(node.value)
        ) {
          context.report({
            node,
            message:
              "Description blocks should start with 'Given', 'When' or 'And'.",
          });
        }
      },
      "CallExpression[callee.name='test'] > Literal": function (node) {
        if (!/^then /i.test(node.value)) {
          context.report({
            node,
            message: "Test blocks should start with 'Then'.",
          });
        }
      },
    };
  },
};
