const axios = require('axios');

module.exports.config = {
    name: "checkversion",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "rjrd",
    description: "Check the bot version and compare with the latest version on GitHub.",
    usePrefix: true,
    commandCategory: "aitools",
    cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
    const repositoryOwner = "LeechShares";
    const repositoryName = "ChatWithAiOfficial";
    const apiUrl = `https://api.github.com/repos/${repositoryOwner}/${repositoryName}/releases/latest`;

    try {
        // Get bot version
        const botVersion = module.exports.config.version;

        // Get latest version from GitHub
        const response = await axios.get(apiUrl);
        const latestVersion = response.data.tag_name;

        api.sendMessage(`› Bot version: ${botVersion}\n› Latest version on GitHub: ${latestVersion}`, event.threadID);

        // Compare versions
        if (botVersion === latestVersion) {
            api.sendMessage("› Your bot is up to date!", event.threadID);
        } else {
            api.sendMessage("› Your bot is not up to date. Consider updating.", event.threadID);
        }
    } catch (error) {
        console.error(`Error checking version: ${error.message}`);
        api.sendMessage("› Unable to check the latest version.", event.threadID);
    }
};