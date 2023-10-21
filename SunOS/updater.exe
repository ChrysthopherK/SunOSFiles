const fs    = require('fs');
const index = require('../../sunOS.js');
const { git, system } = require('../../settings.json')
/**
 * File settings
 */
exports._isFileHidden = false;

exports.evaluateFile = function (args) {
  fs.rmSync(`./os/`, { recursive: true, force: true });
  update();
};

function update() {
  if (!fs.existsSync('./os')) fs.mkdirSync('./os')
  /**
   * System setup
   */
    console.log(`Setting up system`);
  
    Object.keys(system).forEach((dir) => {
      fs.mkdirSync(`./os/${dir}`)
  
      system[dir].forEach(async (file) => {
        var fileContent = await fetch(`${git}${dir}/${file}`).then((a) => a.text());
        fs.writeFileSync(`./os/${dir}/${file}`, fileContent);
      })
    })
  
    fs.writeFileSync(`./os/systemdone`, `exports._isFileHidden=true`)
    console.log(`System done\nRestarting...`)
  
  /**
   * System restart
   */
  setTimeout(() => {
    require("./sunOS.js")
  }, 2500)
}
