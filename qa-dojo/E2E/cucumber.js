const common = `
  --require runner/assertions.js
  --require runner/hooks.js 
  --require test/steps/*.js
  `;

module.exports = {
  default: `${common} test/features/**/*.feature`
};