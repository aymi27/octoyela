module.exports.config = {
  name: 'gemma',
  version: '1.6.9',
  hasPermssion: 0,
  credits: 'API Owner Azeu_Markヅ',
  description: 'Google - Gemma',
  usePrefix: false,
  commandCategory: 'chatbots',
  usages: 'gemma [Questions]',
  cooldowns: 1,
};

module.exports.run = async function({api, event, args}) {
	const axios = require('axios');

    const question = args.join(' ');
	
	if(!question){
	    api.setMessageReaction("❎", event.messageID, () => {}, true); // Emoji yan
	    return api.sendMessage(`Please enter your question.`, event.threadID, event.messageID);
	}
    
    const response = await axios.get(`https://azeu-api-official-1.onrender.com/GoogleGemma?question=${question}`);
    const answer = await response.data.Answer;
    
    api.setMessageReaction("✅", event.messageID, () => {}, true); // Dapat check kasi may question eh HAHAHA
    return api.sendMessage(`Google Gemma: \n ${answer}`, event.threadID, event.messageID);
};