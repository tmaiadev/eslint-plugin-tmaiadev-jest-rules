const gwtRule = require("./rules/enforce-gwt");
const itShouldRule = require("./rules/enforce-it-should");

module.exports = {
  rules: {
    "enforce-gwt": gwtRule,
    "enforce-it-should": itShouldRule,
  },
};
