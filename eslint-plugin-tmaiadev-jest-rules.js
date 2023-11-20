const gwtRule = require("./rules/enforce-gwt");
const gwtCapitalziedRule = require("./rules/enforce-gwt-capitalized");
const itShouldRule = require("./rules/enforce-it-should");

module.exports = {
  rules: {
    "enforce-gwt": gwtRule,
    "enforce-gwt-capitalized": gwtCapitalziedRule,
    "enforce-it-should": itShouldRule,
  },
};
