const index = require('..');
/**
 * File settings
 */
exports._isFileHidden = true;

exports.evaluateFile = function (args) {
  const max = parseInt(args[1]);
  const min = parseInt(args[0]);
  const random = Math.floor(Math.random() * (max - min) + min);

  return console.log(random);
};