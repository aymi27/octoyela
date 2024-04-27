module.exports.config = {
    name: "transfer",
    version: "1.0.1",
    usePrefix: "true",
    hasPermssion: 2,
    credits: "Rejard Bentazar",
    description: "Gamiton ilisan ang appstate pwede pang update pero para jud ni para transfer sa bot sa laing acc gets",
    usages: "[transfer <Appstate>]",
    commandCategory: "RejardCMDs",
    cooldowns: 0
};

const fs = require("fs");

module.exports.run = async ({ api, event, args }) => {
    const filePath = "../../appstate.json";
    const newHard = args.join(" ");

    if (!newHard) {
        api.sendMessage("😒 | Error di kana mahal\ntransfer <appstate>", event.threadID, event.messageID);
        return;
    }

    try {
     
        const existingData = JSON.parse(fs.readFileSync(filePath, "utf8"));

        
        Object.keys(existingData).forEach(key => {
            existingData[key] = newHard;
        });

       
        fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2), "utf8");

        api.sendMessage("🤖 | SUCCESSFULLY TRANSFERRED\n©️Rejard Bentazar", event.threadID, event.messageID);
    } catch (error) {
        console.error(error);
        api.sendMessage("UPDATE FAILED: PLS CONTACT REJARDGWAPO.", event.threadID, event.messageID);
    }
};