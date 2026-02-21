const common = `
  --require runner/assertions.js
  --require runner/hooks.js 
  --require features/steps/*.js
  `;

module.exports = {
  default: `${common} features/*.feature`
};