module['exports']['config'] = {
    name: "hard",
    version: "1.0.0",
    usePrefix: "false",
    hasPermssion: 0,
    credits: "Who's Deku",
    description: "AI powered by Blackbox",
    commandCategory: "StudyAi",
    usages: "[ask]",
    cooldowns: 0
};

module['exports']['run'] = async function({ api, event, args }) {
    const axios = require("axios");
    let { messageID, threadID, senderID, body } = event;
    let tid = threadID,
    mid = messageID;
    const q = encodeURIComponent(args.join(" "));
    if (!q) return api.sendMessage("wrong feeling char\nuse hard <question>", tid, mid);
  //api.sendMessage("ganto po dapat hard <questions>", tid, mid);
    try {
        api.setMessageReaction("😗", mid, (err) => {}, true);

api.sendMessage("wait ah😗...", tid, mid);
        const url = 'https://useblackbox.io/chat-request-v4';

  const data = {
    textInput: q,
    allMessages: [{ user: q }],
    stream: '',
    clickedContinue: true,
  };

const res = await axios.post(url, data);

    const m = res.data.response[0][0];
return api.sendMessage(m, tid, mid)
   } catch(e){
  return api.sendMessage(e.message, tid, mid)
    }
};