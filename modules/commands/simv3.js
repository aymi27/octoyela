module.exports.config = {
  name: 'sim',
  version: '1.6.9',
  hasPermssion: 0,
  credits: 'API Owner Azeu_Markヅ',
  description: 'Talk with SimSimi',
  usePrefix: false,
  commandCategory: 'chatbots',
  usages: 'simi [message]',
  cooldowns: 1,
};

module.exports.run = async function({api, event, args}) {
	const axios = require('axios');

    const message = args.join(' ');
	
	if(!message){
	    api.setMessageReaction("👾", event.messageID, () => {}, true); // Emoji yan
	    return api.sendMessage(`ano bayun?.`, event.threadID, event.messageID);
	}
    
    const response = await axios.get(`https://azeu-api-official-1.onrender.com/SimSimiChat?message=${message}`);
    const answer = await response.data.Reply;
    
    api.setMessageReaction("🙄", event.messageID, () => {}, true); // Dapat check kasi may question eh HAHAHA
    return api.sendMessage(`Answer: \n ${answer}`, event.threadID, event.messageID);
};