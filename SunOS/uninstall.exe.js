const fs    = require('fs');
const index = require('../../sunOS.js');
/**
 * File settings
 */
exports._isFileHidden = false;

exports.evaluateFile = function (args) {
  console.log(`Uninstalling system`);
  fs.rmSync(`./os/`, { recursive: true, force: true });
};
