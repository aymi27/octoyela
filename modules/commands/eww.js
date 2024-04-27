const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Sample JSON file with allowed UIDs
const allowedUidUrl = "https://chatwithaiapi.leechshares.repl.co/vip/vip.json";

// Directory for caching downloaded videos
const cacheDirectory = path.join(__dirname, 'cache', 'hard');

module.exports.config = {
  name: "eww",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "REJARDGWAPO",
  usePrefix: "true",
  description: "Search video in P*rnH*b",
  commandCategory: "Features",
  usages: "/eww <search>",
  cooldowns: 0
};

module['exports']['run'] = async function({ api, event, args }) {
  try {
    // Make a request to get the allowed UIDs
    const allowedUidResponse = await axios.get(allowedUidUrl);

    // Check if the API response contains allowed UIDs
    if (allowedUidResponse.data && allowedUidResponse.data.uids) {
      const allowedUids = allowedUidResponse.data.uids;

      // Check if the requester's UID is allowed
      if (allowedUids.includes(event.senderID)) {
        // Get the search query from the command arguments
        const searchQuery = args.join(" ");

        // Make a request to the API with the search query to get the video URL
        const response = await axios.get(`https://api.luxannareyes.repl.co/xfetch?tags=${encodeURIComponent(searchQuery)}`);

        // Check if the API response contains a video URL
        if (response.data && response.data.video) {
          // Send a "please wait" message
          const waitMessage = await api.sendMessage("Please wait, downloading the video...", event.threadID);

          // Download the video content
          const videoContent = await axios.get(response.data.video, { responseType: 'arraybuffer' });

          // Save the video in the cache/hard directory
          const videoFileName = path.join(cacheDirectory, 'downloaded_video.mp4');
          fs.writeFileSync(videoFileName, Buffer.from(videoContent.data));

          // Send the video as an attachment
          api.sendMessage({
            body: 'igata nimo uie',
            attachment: fs.createReadStream(videoFileName),
          }, event.threadID, () => {
            // Remove the "please wait" message
            api.deleteMessage(waitMessage.messageID);
          });

          return;
        }

        // If the API response is missing the video URL
        api.sendMessage("Video URL not found in the API response.", event.threadID, event.messageID);
      } else {
        // If the requester's UID is not allowed
        api.sendMessage("You are not VIP.", event.threadID, event.messageID);
      }
    } else {
      // If the API response is missing allowed UIDs
      api.sendMessage("Allowed UIDs not found in the API response.", event.threadID, event.messageID);
    }
  } catch (error) {
    console.error(error);
    api.sendMessage("An error occurred while fetching or sending the video.", event.threadID, event.messageID);
  }
}