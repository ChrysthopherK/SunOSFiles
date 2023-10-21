const fs    = require('fs');
const index = require('../../sunOS.js');
/**
 * File settings
 */
exports._isFileHidden = false;

exports.evaluateFile = function (args) {
  console.log(`Uninstalling system`);

  var things = fs.readdirSync('./os');
  things.forEach((file) => {
    fs.rmSync(`./os/${file}`)
  })
};
