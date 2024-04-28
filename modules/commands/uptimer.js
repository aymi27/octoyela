module.exports.config = {
  name: "uptimer",
  version: "1.0.0",
  hasPermission: 0,
  credits: "Prince Sanel",
  usePrefix: true,
  description: "Uptime api by Prince Sanel Osorio",
  commandCategory: "random",
  usages: "[url] or Noprefix",
  cooldowns: 2,
}; // Prince Sanel Osorio's api

module.exports.run = async function({ args, event, api }) {
	const axios = require('axios');
	const url = args[0];
	function reply(d) {
    api.sendMessage(d, event.threadID, event.messageID)
    }
	if (!args[0]) {
		msg = ""
        msgs = ""
        m = 0;
        const name = await axios.get('https://prince-uptime.tokope4632.repl.co/uptime?');
        const urls = name.data.list;
        for (let i of urls) {
          m += 1;
          msg += m+". "+i+'\n';
        }
        msgs += "List of all uptime in PRINCE-UPTIME-API\n\n"+msg;
        reply(msgs)
        return;
    }
    else {
    	try {
    	const a = await axios.get(`https://prince-uptime.tokope4632.repl.co/uptime?url=${encodeURI(url)}`);
        api.sendMessage(a.data.message, event.threadID, event.messageID);
        } catch (error) {
        	api.sendMessage('An error occurred!', event.threadID, event.messageID);
        }
    }
}