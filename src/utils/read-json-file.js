const fs = require('fs/promises');

/**
 * @param {string} filePath 
 * @returns 
 */
module.exports = async (filePath) => {
  return JSON.parse(await fs.readFile(filePath, { encoding: 'utf-8' }));
};
