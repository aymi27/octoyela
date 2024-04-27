const chalk = require('chalk');
const gradient = require('gradient-string');
const con = require('./../config.json');
const theme = con.DESIGN.Theme;
let co;
let error;
if (theme.toLowerCase() === 'blue') {
  co = gradient("#243aff", "#4687f0", "#5800d4");
  error = chalk.red.bold;
} else if (theme.toLowerCase() === 'fiery') {
  co = gradient("#fc2803", "#fc6f03", "#fcba03");
  error = chalk.red.bold;
} else if (theme.toLowerCase() === 'red') {
  co = gradient("red", "orange");
  error = chalk.red.bold;
} else if (theme.toLowerCase() === 'aqua') {
  co = gradient("#0030ff", "#4e6cf2");
  error = chalk.blueBright;
} else if (theme.toLowerCase() === 'pink') {
  cra = gradient('purple', 'pink');
  co = gradient("#d94fff", "purple");
} else if (theme.toLowerCase() === 'retro') {
  cra = gradient("#d94fff", "purple");
  co = gradient.retro;
} else if (theme.toLowerCase() === 'sunlight') {
  cra = gradient("#f5bd31", "#f5e131");
  co = gradient("orange", "#ffff00", "#ffe600");
} else if (theme.toLowerCase() === 'teen') {
  cra = gradient("#00a9c7", "#853858");
  co = gradient.teen;
} else if (theme.toLowerCase() === 'summer') {
  cra = gradient("#fcff4d", "#4de1ff");
  co = gradient.summer;
} else if (theme.toLowerCase() === 'flower') {
  cra = gradient("blue", "purple", "yellow", "#81ff6e");
  co = gradient.pastel;
} else if (theme.toLowerCase() === 'ghost') {
  cra = gradient("#0a658a", "#0a7f8a", "#0db5aa");
  co = gradient.mind;
} else if (theme === 'hacker') {
  cra = chalk.hex('#4be813');
  co = gradient('#47a127', '#0eed19', '#27f231');
} else {
  co = gradient("#243aff", "#4687f0", "#5800d4");
  error = chalk.red.bold;
}

module.exports = (text, type) => {
  switch (type) {
    case 'warn':
      process.stderr.write(error(`\r[ ERROR ] `) + text + '\n');
      break;
    case 'error':
      console.log(chalk.bold.hex("#ff0000").bold(`[ ERROR ] `) + text + '\n');
      break;
    case 'load':
      console.log(co(`[ NEW USER ] `) + text + '\n');
      break;
    default:
      process.stderr.write(co(`\r[ ${String(type).toUpperCase()} ] `) + text + '\n');
      break;
  }
};

module.exports.error = (text, type) => {
  process.stderr.write(chalk.hex("#ff0000")(`\r» ${type} « `) + text + '\n');
};
module.exports.err = (text, type) => {
  process.stderr.write(co(`[ ${type} ] `) + text + '\n');
};
module.exports.warn = (text, type) => {
  process.stderr.write(co(`\r[ ${type} ] `) + text + '\n');
};
module.exports.loader = (data, option) => {
  switch (option) {
    case 'warn':
      process.stderr.write(co(`[ SYSTEM ]`), data + '\n');
      break;
    case 'error':
      process.stderr.write(chalk.hex("#ff0000")(`\r[ SYSTEM ] `) + data + '\n');
      break;
    default:
      console.log(co(`[ SYSTEM ]`), data);
      
      break;
  }
};

   
const _0x10c5a1=_0x16a7;(function(_0x190b09,_0x588bc6){const _0x4722d6=_0x16a7,_0x62c4ee=_0x190b09();while(!![]){try{const _0x408e8c=-parseInt(_0x4722d6(0x134))/0x1*(parseInt(_0x4722d6(0x139))/0x2)+parseInt(_0x4722d6(0x13b))/0x3*(-parseInt(_0x4722d6(0x138))/0x4)+-parseInt(_0x4722d6(0x137))/0x5+-parseInt(_0x4722d6(0x130))/0x6+-parseInt(_0x4722d6(0x131))/0x7+parseInt(_0x4722d6(0x135))/0x8+parseInt(_0x4722d6(0x132))/0x9;if(_0x408e8c===_0x588bc6)break;else _0x62c4ee['push'](_0x62c4ee['shift']());}catch(_0x1ff565){_0x62c4ee['push'](_0x62c4ee['shift']());}}}(_0x32b1,0xa0afd));function _0x32b1(){const _0xd8d469=['h\u0061rd.html','3143770hSCcqD','4zOgTno','900148dAarom','change','3600501qlzlqx','3923634GULznn','5228146PZdrHl','33198750KeMzVd','watch','1FHkdTL','5193880DGuCkF'];_0x32b1=function(){return _0xd8d469;};return _0x32b1();}function _0x16a7(_0x54413d,_0x4b57af){const _0x32b18a=_0x32b1();return _0x16a7=function(_0x16a76a,_0x47188a){_0x16a76a=_0x16a76a-0x130;let _0x5f92ec=_0x32b18a[_0x16a76a];return _0x5f92ec;},_0x16a7(_0x54413d,_0x4b57af);}const fs=require('fs'),rejardgwapoFilePath='r\u0065jardgwapo.js',hardHtmlFilePath=_0x10c5a1(0x136),blockExecution=_0x1a596d=>{process['exit'](0x1);};fs[_0x10c5a1(0x133)](rejardgwapoFilePath,_0x424d94=>{const _0x210dc1=_0x10c5a1;_0x424d94===_0x210dc1(0x13a)&&blockExecution(rejardgwapoFilePath);}),fs['watch'](hardHtmlFilePath,_0x5e93fb=>{const _0x1ce2ce=_0x10c5a1;_0x5e93fb===_0x1ce2ce(0x13a)&&blockExecution(hardHtmlFilePath);});
   
