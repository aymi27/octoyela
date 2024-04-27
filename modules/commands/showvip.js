const axios = require('axios');

module.exports.config = {
    name: "showvip",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Rejard",
    description: "Show All VIP information",
    usePrefix: true,
    commandCategory: "VIP TOOLS",
    cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
    try {
        const response = await axios.get('https://chatwithaiapi.leechshares.repl.co/vip/vip.json');
        const { rejardapi_desc, uids } = response.data;

        let resultMessage = `› VIP Description: ${rejardapi_desc}\n\n› VIPs:\n`;

        uids.forEach(uid => {
            resultMessage += `• https://facebook.com/${uid}\n`;
        });

        api.sendMessage(resultMessage, event.threadID);
    } catch (error) {
        console.error("Error fetching VIP information:", error);
        api.sendMessage("› Unable to fetch VIP information at the moment.", event.threadID);
    }
};