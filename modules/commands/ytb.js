const axios = require('axios');

module.exports.config = {
    name: "youtube",
    aliases: ["yt"],
    version: "1.0.0",
    author: "XyryllPanget",
    role: 0,
    shortDescription: {
        en: "Searches YouTube for videos.",
    },
    longDescription: {
        en: "This command searches YouTube for videos based on the given query and returns the top 5 results.",
    },
    category: "Utility",
    guide: {
        en: "To use this command, type !youtube <query>.",
    },
};

module.exports.run = async function({ api, event, args }) {
    const query = args.join(" ");
    if (!query) {
        api.sendMessage("Please provide a search query.", event.threadID);
        return;
    }

    const apiKey = "YourYouTubeAPIKeyHere"; // Replace with your YouTube API key
    const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&type=video&maxResults=5&q=${encodeURIComponent(query)}`;

    try {
        const response = await axios.get(url);
        const searchResults = response.data.items;
        let message = "";
        searchResults.forEach((result, index) => {
            const title = result.snippet.title;
            const description = result.snippet.description;
            const videoId = result.id.videoId;
            const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
            message += `Search Result ${index + 1}:\nTitle: ${title}\nDescription: ${description}\nLink: ${videoUrl}\n\n`;
        });
        api.sendMessage(message, event.threadID);
    } catch (error) {
        console.error(error);
        api.sendMessage("An error occurred while searching YouTube.", event.threadID);
    }
};