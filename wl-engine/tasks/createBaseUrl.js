const fs = require("fs-extra");

const createBaseUrl = (dirDst, baseUrl) => {
  console.log(`Write ${dirDst}/src/api/server.js`);
  const fileContent = `\
// NOTICE: This file is auto-generated by wl-engine.
export default '${baseUrl}';
`;
  fs.writeFileSync(`${dirDst}/src/baseUrl.js`, fileContent);
};

module.exports = createBaseUrl;
