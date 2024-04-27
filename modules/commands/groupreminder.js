const schedule = require('node-schedule');
const moment = require('moment-timezone');

module.exports.config = {
    name: "groupreminder",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "Rejard",
    description: "Set a Reminder for all groups",
    usePrefix: true,
    commandCategory: "REJARDcmds",
    usages: "[YYYY-MM-DD HH:MM] [Text]",
    cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
    if (args.length < 2) {
        return api.sendMessage("› Please provide a valid date and time in the format: YYYY-MM-DD HH:MM", event.threadID);
    }

    const dateTimeString = args[0] + " " + args[1];
    const custom = args.slice(2).join(' ');

    const scheduledDate = moment.tz(dateTimeString, 'YYYY-MM-DD HH:mm', 'Asia/Manila').toDate();

    if (isNaN(scheduledDate)) {
        return api.sendMessage("› Invalid date and time format. Please use: YYYY-MM-DD HH:MM", event.threadID);
    }

    // Define an async function for the scheduled job
    const scheduledJob = async () => {
        const threadList = await api.getThreadList(25, null, ['INBOX']);
        let sentCount = 0;

        async function sendMessage(thread) {
            try {
                await api.sendMessage(`› A message from the Admin:\n\n${custom}`, thread.threadID);
                sentCount++;
            } catch (error) {
                console.error("Error sending a message:", error);
            }
        }

        for (const thread of threadList) {
            if (sentCount >= 20) {
                break;
            }
            if (thread.isGroup && thread.name !== thread.threadID && thread.threadID !== event.threadID) {
                await sendMessage(thread);
            }
        }

        if (sentCount > 0) {
            api.sendMessage("› Set Group Reminder successfully.", event.threadID);
        } else {
            api.sendMessage("› No eligible group threads found to send the message to.", event.threadID);
        }
    };

    // Schedule the notification using the async function
    schedule.scheduleJob(scheduledDate, scheduledJob);

    api.sendMessage(`› Notification scheduled for ${moment(scheduledDate).tz('Asia/Manila').format('YYYY-MM-DD HH:mm:ss')}`, event.threadID);
};