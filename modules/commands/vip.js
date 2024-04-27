const axios = require('axios');

module.exports.config = {
    name: "vip",
    version: "2.0.1",
    hasPermssion: 2,
    credits: "Rejard",
    description: "This is used to add uid for vip features",
    usePrefix: true,
    commandCategory: "ChatWithAi VIP",
    usages: "[add/desc/delete] [data]",
    cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
    if (args.length < 2) {
        return api.sendMessage("› Invalid usage. Please use: /vip [add/desc/delete] [data]", event.threadID);
    }

    const action = args[0].toLowerCase();
    const data = args.slice(1).join(' ');

    try {
        switch (action) {
            case 'add': {
                const addLink = `https://chatwithaiapi.leechshares.repl.co/vip/index.php?uid=${data}`;
                await axios.get(addLink);
                api.sendMessage(`› Added UID: ${data}`, event.threadID);
                break;
            }
            case 'desc': {
                const descLink = `https://chatwithaiapi.leechshares.repl.co/vip/desc.php?rejardapi_desc=${data}`;
                await axios.get(descLink);
                api.sendMessage(`› Set VIP Description: ${data}`, event.threadID);
                break;
            }
            case 'delete': {
                const deleteLink = `https://chatwithaiapi.leechshares.repl.co/vip/delete.php?uid=${data}`;
                await axios.get(deleteLink);
                api.sendMessage(`› Deleted UID: ${data}`, event.threadID);
                break;
            }
            default:
                api.sendMessage("› Invalid action. Please use: /vip [add/desc/delete] [data]", event.threadID);
        }
    } catch (error) {
        console.error(`Error in /vip command: ${error.message}`);
        api.sendMessage("› An error occurred while processing the command.", event.threadID);
    }
};