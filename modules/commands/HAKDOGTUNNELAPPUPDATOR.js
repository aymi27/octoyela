module.exports.config = {
    name: "hkappupdate",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "RejardGwapo",
    usePrefix: "true",
    description: "Update the HAKDOGTUNNEL_LITE_V1.0 with version, APK URL, and notes",
    usages: "[hkupdate <version> <apkurl> <notes>]",
    commandCategory: "HAKDOGVPN",
    cooldowns: 0
};

const axios = require("axios");

module.exports.run = async ({ api, event, args }) => {
    const [version, apkUrl, notes] = args;

    if (!version || !apkUrl || !notes) {
        api.sendMessage("Please provide the version, APK URL, and notes in the format: ?hkappupdate <version> <apkurl> <notes>", event.threadID, event.messageID);
        return;
    }

    try {
        const data = {
            newVersion: version,
            apkUrl: apkUrl,
            versionNotes: notes
        };

        // hakdog2 is para sa Updatebapp
        const response = await axios.get(`https://hk.drajermaniwata.repl.co/hakdog2.php?hard=${encodeURIComponent(JSON.stringify(data))}`);

        api.sendMessage("🌭 | Update sent successfully!", event.threadID, event.messageID);
    } catch (error) {
        console.error(error);
        api.sendMessage("Update Failed: Pls contact rejardgwapo", event.threadID, event.messageID);
    }
};