module.exports = {
  meta: {
    type: "problem",
    docs: {
      description:
        "Enfore descrition blocks to use 'Given/When/Then' pattern in their names.",
    },
    fixable: "code",
  },
  create(context) {
    return {
      "CallExpression[callee.name='describe'] > Literal": function (node) {
        if (
          (/^when /i.test(node.value) && !node.value.startsWith("When")) ||
          (/^and /i.test(node.value) && !node.value.startsWith("And"))
        ) {
          context.report({
            node,
            message:
              "Description blocks should be capitalized. Use 'When' and 'And' instead of 'when' and 'and'.",
            fix: function (fixer) {
              return fixer.replaceText(
                node,
                `"${node.value[0].toUpperCase() + node.value.slice(1)}"`
              );
            },
          });
        }
      },
      "CallExpression[callee.name='test'] > Literal": function (node) {
        if (/^then /i.test(node.value) && !node.value.startsWith("Then")) {
          context.report({
            node,
            message:
              "Test blocks should be capitalized. Use 'Then' instead of 'then'.",
            fix: function (fixer) {
              return fixer.replaceText(
                node,
                `"${node.value[0].toUpperCase() + node.value.slice(1)}"`
              );
            },
          });
        }
      },
    };
  },
};
