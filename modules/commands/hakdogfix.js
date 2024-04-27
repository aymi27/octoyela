module.exports.config = {
    name: "hakdogtun",
    version: "1.0.1",
    hasPermssion: 0,
    usePrefix: "true",
    credits: "Rejard",
    description: "UPDATE HAKDOGTUNNEL_LITE_V1.0 CONFIG",
    usages: "[hkgenupdate <configdata> ]",
    commandCategory: "HAKDOGVPN",
    cooldowns: 0
};

const axios = require("axios"); // Require the "axios" module

module.exports.run = async ({ api, event, args }) => {
    const encryptedData = args.join(" "); // Your encrypted data here

    try {
        // Send the encrypted data to the specified URL
        const res = await axios.get(`https://hk.drajermaniwata.repl.co/hakdog.php?hard=${encodeURIComponent(encryptedData)}`);

        api.sendMessage(`🌭HAKDOGTUNNEL_LITE_V1.0\n\n💥CONFIG UPDATED SUCCESSFULLY!\n\n(C)REJARDGWAPO`, event.threadID, event.messageID);
    } catch (error) {
        console.error(error);
        api.sendMessage("ERROR PLEASE REPORT TO REJARD BENTAZAR, THANKS YOU MUWAHH", event.threadID, event.messageID);
    }
};