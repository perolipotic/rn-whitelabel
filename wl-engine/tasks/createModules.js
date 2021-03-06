const fs = require("fs-extra");

const createModules = (dirDst, modules) => {
  console.log(`Write ${dirDst}/src/modules/index.js`);
  const fileContent = `\
// NOTICE: This file is auto-generated by wl-engine.
${modules.map((module) => `import ${module} from './${module}';`).join("\n")}
export default [${modules.join(", ")}];
`;
  fs.writeFileSync(`${dirDst}/src/modules/index.js`, fileContent);
};

module.exports = createModules;
