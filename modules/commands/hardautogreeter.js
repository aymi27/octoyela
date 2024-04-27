module.exports.config = {
    name: "autogreeter",
    version: "1.0.0",
    hasPermssion: 0,
    usePrefix: "true",
    credits: "REJARD x DSTRYR",
    description: "gamiton aron mag greet kas imoa uyab og naa hahaha rag reminder ba nga gabase",
    usages: " <uid> <date> <time> <event>",
    commandCategory: "RejardCMDs",
    cooldowns: 0
};

const schedule = require("node-schedule");

module.exports.run = async ({ api, event, args }) => {
    const [uid, date, time, ...eventDetails] = args;

    if (!uid || !date || !time || !eventDetails.length) {
        api.sendMessage("🙄 | Please provide the UID, date, time, and event details", event.threadID, event.messageID);
        return;
    }

    const reminderDate = new Date(`${date} ${time}`);

    if (isNaN(reminderDate.getTime())) {
        api.sendMessage("Invalid date or time format. Please check and try again.", event.threadID, event.messageID);
        return;
    }

    const reminderEvent = eventDetails.join(" ");

    // eto na
    schedule.scheduleJob(reminderDate, () => {
        api.sendMessage({ body: `Autogreet: ${reminderEvent}`, mentions: [{ tag: uid, id: uid }] }, event.threadID);
    });

    api.sendMessage(`AutoGreet set for ${reminderDate.toLocaleString()} for UID ${uid}: ${reminderEvent}`, event.threadID, event.messageID);
};
 
//CODE BY REJARDGWAPO PLEASE DONT LANGKAT THE CREDITS
// INSTALL THIS npm install node-schedule 