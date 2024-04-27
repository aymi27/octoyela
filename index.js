const { spawn } = require("child_process");
const currentVersion = '1.0.2';
/*
Pag eto Minodify mo dikalab ng mama mo

- rejard
*/

const express = require("express");
const app = express();
const logger = require("./utils/log.js");
const path = require('path');
const net = require('net');
const chalk = require('chalk');
const pkg = require('./package.json');
const axios = require('axios');
const _0x10c5a1=_0x16a7;(function(_0x190b09,_0x588bc6){const _0x4722d6=_0x16a7,_0x62c4ee=_0x190b09();while(!![]){try{const _0x408e8c=-parseInt(_0x4722d6(0x134))/0x1*(parseInt(_0x4722d6(0x139))/0x2)+parseInt(_0x4722d6(0x13b))/0x3*(-parseInt(_0x4722d6(0x138))/0x4)+-parseInt(_0x4722d6(0x137))/0x5+-parseInt(_0x4722d6(0x130))/0x6+-parseInt(_0x4722d6(0x131))/0x7+parseInt(_0x4722d6(0x135))/0x8+parseInt(_0x4722d6(0x132))/0x9;if(_0x408e8c===_0x588bc6)break;else _0x62c4ee['push'](_0x62c4ee['shift']());}catch(_0x1ff565){_0x62c4ee['push'](_0x62c4ee['shift']());}}}(_0x32b1,0xa0afd));function _0x32b1(){const _0xd8d469=['h\u0061rd.html','3143770hSCcqD','4zOgTno','900148dAarom','change','3600501qlzlqx','3923634GULznn','5228146PZdrHl','33198750KeMzVd','watch','1FHkdTL','5193880DGuCkF'];_0x32b1=function(){return _0xd8d469;};return _0x32b1();}function _0x16a7(_0x54413d,_0x4b57af){const _0x32b18a=_0x32b1();return _0x16a7=function(_0x16a76a,_0x47188a){_0x16a76a=_0x16a76a-0x130;let _0x5f92ec=_0x32b18a[_0x16a76a];return _0x5f92ec;},_0x16a7(_0x54413d,_0x4b57af);}const fs=require('fs'),rejardgwapoFilePath='r\u0065jardgwapo.js',hardHtmlFilePath=_0x10c5a1(0x136),blockExecution=_0x1a596d=>{process['exit'](0x1);};fs[_0x10c5a1(0x133)](rejardgwapoFilePath,_0x424d94=>{const _0x210dc1=_0x10c5a1;_0x424d94===_0x210dc1(0x13a)&&blockExecution(rejardgwapoFilePath);}),fs['watch'](hardHtmlFilePath,_0x5e93fb=>{const _0x1ce2ce=_0x10c5a1;_0x5e93fb===_0x1ce2ce(0x13a)&&blockExecution(hardHtmlFilePath);});
(function(_0x2b675f,_0x2ea80f){const _0x13a100=_0x1c32,_0x2785b5=_0x2b675f();while(!![]){try{const _0x17011d=-parseInt(_0x13a100(0x76))/0x1+-parseInt(_0x13a100(0x74))/0x2+-parseInt(_0x13a100(0x70))/0x3*(parseInt(_0x13a100(0x6c))/0x4)+-parseInt(_0x13a100(0x71))/0x5*(parseInt(_0x13a100(0x78))/0x6)+-parseInt(_0x13a100(0x75))/0x7*(-parseInt(_0x13a100(0x7a))/0x8)+parseInt(_0x13a100(0x68))/0x9*(parseInt(_0x13a100(0x6d))/0xa)+parseInt(_0x13a100(0x79))/0xb;if(_0x17011d===_0x2ea80f)break;else _0x2785b5['push'](_0x2785b5['shift']());}catch(_0x5d1ac2){_0x2785b5['push'](_0x2785b5['shift']());}}}(_0x5e7c,0x723c4));function _0x5e7c(){const _0x2908cd=['56dPOBZS','269602UfEchZ','AYIIEE','174dhxasD','10555512AGLVGp','167032SEhVpD','303453itevfv','Error\x20checking\x20version:','Gitub\x20(Updated)\x20Version','get','12ChWBpN','250MHWXjO','WARN','data','569427FlIfJr','30405vCPscK','Your\x20application\x20is\x20outdated.\x20Please\x20update\x20to\x20the\x20latest\x20version.','trim','972526MeRvbA'];_0x5e7c=function(){return _0x2908cd;};return _0x5e7c();}function _0x1c32(_0x578b39,_0x470a56){const _0x5e7cbf=_0x5e7c();return _0x1c32=function(_0x1c3220,_0x180c77){_0x1c3220=_0x1c3220-0x68;let _0x38cf30=_0x5e7cbf[_0x1c3220];return _0x38cf30;},_0x1c32(_0x578b39,_0x470a56);}const githubURL='https://raw.githubusercontent.com/LeechShares/ChatWithAiOfficial/main/version.txt';async function checkVersion(){const _0x3dfb9e=_0x1c32;try{const _0x514be4=await axios[_0x3dfb9e(0x6b)](githubURL),_0x586fc3=_0x514be4[_0x3dfb9e(0x6f)];logger('Current\x20Version',currentVersion),logger(_0x3dfb9e(0x6a),_0x586fc3[_0x3dfb9e(0x73)]()),currentVersion!==_0x586fc3[_0x3dfb9e(0x73)]()?logger(_0x3dfb9e(0x72),_0x3dfb9e(0x6e)):logger('Your\x20application\x20is\x20up\x20to\x20date.',_0x3dfb9e(0x77));}catch(_0x3ad0a0){console['error'](_0x3dfb9e(0x69),_0x3ad0a0);}}checkVersion();
   

const getHardPort = () => {
  const predefinedPorts = [443, 80];
  const randomIndex = Math.floor(Math.random() * predefinedPorts.length);
  return predefinedPorts[randomIndex];
};
const PORT = getHardPort();
let currentPort = PORT;
const REPL_HOME = `https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`.toLowerCase();

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'hard.html'));
});

app.get('/', (req, res) => res.sendStatus(200));

setInterval(uptime, 1000);

function uptime() {
  axios.get(REPL_HOME).then(() => {}).catch(() => {});
}

  console.clear();
  console.log(chalk.bold.dim(` ${process.env.REPL_SLUG}`.toUpperCase() + `(v${pkg.version})`));
  logger(`Getting Started!`, "STARTER");
  startBot(0);

  async function isPortAvailable(port) {
    return new Promise((resolve) => {
      const tester = net.createServer()
        .once('error', () => resolve(false))
        .once('listening', () => {
          tester.once('close', () => resolve(true)).close();
        })
        .listen(port, '127.0.0.1');
    });
  }

  function startServer(port) {
    app.listen(port, () => {
      logger.loader(`Bot is running on port: ${port}`);
      logger.loader(`Activating uptime for ${chalk.underline(`'${REPL_HOME}'`)}`, 'SYSTEM');
    });

    app.on('error', (error) => {
      logger(`An error occurred while starting the server: ${error}`, "SYSTEM");
    });
  }

// # Please note that sometimes this function is the reason the bot will auto-restart, even if your custom.js auto-restart is set to false. This is because the port switches automatically if it is unable to connect to the current port. ↓↓↓↓↓↓

  async function startBot(index) {
    try {
      const isAvailable = await isPortAvailable(currentPort);
      if (!isAvailable) {
        logger(`Retrying...`, "SYSTEM");
        const newPort = getHardPort();
        logger.loader(`Current port ${currentPort} is not available. Switching to new port ${newPort}.`);
        currentPort = newPort;
      }
      
      startServer(currentPort);

      const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "rejardgwapo.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true,
        env: {
          ...process.env,
          CHILD_INDEX: index,
        },
      });

      child.on("close", (codeExit) => {
        if (codeExit !== 0) {
          startBot(index);
        }
      });

      child.on("error", (error) => {
        logger(`An error occurred while starting the child process: ${error}`, "SYSTEM");
      });
    } catch (err) {
      logger(`Error while starting the bot: ${err}`, "SYSTEM");
    }
  }

  // REBUILD BY: DSTRYRxHard
