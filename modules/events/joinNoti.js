module.exports.config = {
  name: "join",
  eventType: ['log:subscribe'],
  version: "1.0.0",
  credits: "Mirai-Team", // FIXED BY YAN MAGLINTE
  description: "GROUP UPDATE NOTIFICATION"
};

const ADMIN = 'Yoya';
const FB_LINK = 'https://www.facebook.com/100095262681590';

const fs = require('fs-extra');
const { loadImage, createCanvas, registerFont } = require("canvas");
const request = require('request');
//const { join } = require('path');
const axios = require('axios');
const jimp = require("jimp")
const fontlink = 'https://drive.google.com/u/0/uc?id=1ZwFqYB-x6S9MjPfYm3t3SP1joohGl4iw&export=download'
let PRFX = `${global.config.PREFIX}`;

module.exports.circle = async (image) => {
  image = await jimp.read(image);
  image.circle();
  return await image.getBufferAsync("image/png");
}

let suffix;

module.exports.run = async function({ api, event, Users }) {
  var fullYear = global.client.getTime("fullYear");
  var getHours = await global.client.getTime("hours");
  var session = `${getHours < 3 ? "midnight" : getHours < 8 ? "Early morning" : getHours < 12 ? "noon" : getHours < 17 ? "afternoon" : getHours < 23 ? "evening" : "midnight"}`
  const moment = require("moment-timezone");
  var thu = moment.tz('Asia/Manila').format('dddd');
  if (thu == 'Sunday') thu = 'Sunday'
  if (thu == 'Monday') thu = 'Monday'
  if (thu == 'Tuesday') thu = 'Tuesday'
  if (thu == 'Wednesday') thu = 'Wednesday'
  if (thu == "Thursday") thu = 'Thursday'
  if (thu == 'Friday') thu = 'Friday'
  if (thu == 'Saturday') thu = 'Saturday'
  const time = moment.tz("Asia/Manila").format("HH:mm:ss - DD/MM/YYYY");
  const hours = moment.tz("Asia/Manila").format("HH");
  const { commands } = global.client;
  const { threadID } = event;
  let threadInfo = await api.getThreadInfo(event.threadID);
  let threadName = threadInfo.threadName;
  if (!event.logMessageData.addedParticipants || !Array.isArray(event.logMessageData.addedParticipants)) {
    return;
  }
  if (event.logMessageData.addedParticipants && Array.isArray(event.logMessageData.addedParticipants) && event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
    //api.changeNickname(`𝗕𝗢𝗧 ${(!global.config.BOTNAME) ? "Buddy" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
    
    let gifUrl = 'https://i.imgur.com/4HMupHz.gif';
let gifPath = __dirname + '/cache/join/join.gif';

axios.get(gifUrl, { responseType: 'arraybuffer' })
.then(response => {
    fs.writeFileSync(gifPath, response.data);
    return api.sendMessage("〘🧚🏻‍♀️〙𝙷𝙴𝙻𝙻𝙾 𝙿𝙴𝙾𝙿𝙻𝙴!", event.threadID, () => api.sendMessage({ body: `〘🧚🏻‍♀️〙 𝖦𝗋𝗈𝗎𝗉 𝖢𝗈𝗇𝗇𝖾𝖼𝗍𝗂𝗈𝗇 𝗂𝗇 ${threadName} at ${session} 𝗌𝗎𝖼𝖼𝖾𝗌𝗌! \n\n〘🪄〙 𝖢𝗎𝗋𝗋𝖾𝗇𝗍 𝖢𝗈𝗆𝗆𝖺𝗇𝖽𝗌: ${commands.size}\n〘🍥〙 𝖡𝗈𝗍 𝖯𝗋𝖾𝖿𝗂𝗑: ${global.config.PREFIX}\n〘🍥〙 𝖵𝖾𝗋𝗌𝗂𝗈𝗇: ${global.config.version}\n〘🍥〙 𝖠𝖽𝗆𝗂𝗇: ‹${ADMIN}›\n〘🍥〙 𝖥𝖺𝖼𝖾𝖻𝗈𝗈𝗄: ‹${FB_LINK}›\n〘🍥〙 Use ${PRFX}𝗁𝖾𝗅𝗉 𝗍𝗈 𝗏𝗂𝖾𝗐 𝖼𝗈𝗆𝗆𝖺𝗇𝖽 𝖽𝖾𝗍𝖺𝗂𝗅𝗌\n〘🍥〙 𝖠𝖽𝖽𝖾𝖽 𝖻𝗈𝗍 𝖺𝗍: ⟨ ${time} ⟩〈 ${thu} 〉`, attachment: fs.createReadStream(gifPath)}, threadID));
})
.catch(error => {
    console.error(error);
});
  }
  else {
    try {
      if (!fs.existsSync(__dirname + `/cache/font/Semi.ttf`)) {
        let getfont = (await axios.get(fontlink, { responseType: "arraybuffer" })).data;
        fs.writeFileSync(__dirname + `/cache/font/Semi.ttf`, Buffer.from(getfont, "utf-8"));
      };
      const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
      let { threadName, participantIDs } = await api.getThreadInfo(threadID);
      const threadData = global.data.threadData.get(parseInt(threadID)) || {};
      var mentions = [], nameArray = [], memLength = [], iduser = [], i = 0;
      var abx = [];
      for (id in event.logMessageData.addedParticipants) {
        const userName = event.logMessageData.addedParticipants[id].fullName; iduser.push(event.logMessageData.addedParticipants[id].userFbId.toString());
        nameArray.push(userName);
        mentions.push({ tag: userName, id: event.senderID });
        memLength.push(participantIDs.length - i++);
        console.log(userName)
      }
      // console.log(event.logMessageData.addedParticipants)
      var id = [];
      for (let o = 0; o < event.logMessageData.addedParticipants.length; o++) {
        let pathImg = __dirname + `/cache/join/${o}.png`;
        let pathAva = __dirname + `/cache/join/avt.png`;
        let avtAnime = (await axios.get(encodeURI(
          `https://graph.facebook.com/${event.logMessageData.addedParticipants[o].userFbId}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`), { responseType: "arraybuffer" })).data;
        var ok = [
          'https://i.imgur.com/dDSh0wc.jpeg',
          'https://i.imgur.com/UucSRWJ.jpeg',
          'https://i.imgur.com/OYzHKNE.jpeg',
          'https://i.imgur.com/V5L9dPi.jpeg',
          'https://i.imgur.com/M7HEAMA.jpeg'
        ]
        let background = (await axios.get(encodeURI(`${ok[Math.floor(Math.random() * ok.length)]}`), { responseType: "arraybuffer", })).data;
        fs.writeFileSync(pathAva, Buffer.from(avtAnime, "utf-8"));
        fs.writeFileSync(pathImg, Buffer.from(background, "utf-8"));
        var avatar = await this.circle(pathAva);
        let baseImage = await loadImage(pathImg);
        let baseAva = await loadImage(avatar);
        registerFont(__dirname + `/cache/font/Semi.ttf`, {
          family: "Semi"
        });
        let canvas = createCanvas(1902, 1082);
        console.log(canvas.width, canvas.height)
        let ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(baseAva, canvas.width / 2 - 188, canvas.height / 2 - 375, 375, 355);
        ctx.fillStyle = "#FFF";
        ctx.textAlign = "center";
        ctx.font = `155px Semi`;
        ctx.fillText(`${event.logMessageData.addedParticipants[o].fullName}`, canvas.width / 2 + 20, canvas.height / 2 + 100);
        ctx.save();
        ctx.font = `75px Semi`;
        ctx.fillText(`Welcome to ${threadName}`, canvas.width / 2 - 15, canvas.height / 2 + 235)
        const number = participantIDs.length - o;

        if (number === 11 || number === 12 || number === 13) {
          suffix = "th";
        } else {
          const lastDigit = number % 10;
          switch (lastDigit) {
            case 1:
              suffix = "st";
              break;
            case 2:
              suffix = "nd";
              break;
            case 3:
              suffix = "rd";
              break;
            default:
              suffix = "th";
              break;
          }
        }

        ctx.fillText(`You are the ${number}${suffix} member of this group`, canvas.width / 2 - 15, canvas.height / 2 + 350);
        ctx.restore();
        const imageBuffer = canvas.toBuffer();
        fs.writeFileSync(pathImg, imageBuffer);
        abx.push(fs.createReadStream(__dirname + `/cache/join/${o}.png`))
      }
      memLength.sort((a, b) => a - b);
      (typeof threadData.customJoin == "undefined") ? msg = `〘🧚🏻‍♀️🪄〙𝗪𝗘𝗟𝗖𝗢𝗠𝗘 𝗗𝗜𝗧𝗢 𝗠𝗬 𝗟𝗢𝗩𝗘! 𝗬𝗢𝗨❜𝗥𝗘 𝗔 𝗡𝗘𝗪 𝗠𝗘𝗠𝗕𝗘𝗥 {name} 𝘁𝗼 𝘁𝗵𝗲 𝗴𝗿𝗼𝘂𝗽 {threadName}\n→ URL Profile:\nhttps://www.facebook.com/profile.php?id={iduser}\n→ {type} 𝗮𝗿𝗲 𝘁𝗵𝗲 𝗴𝗿𝗼𝘂𝗽'𝘀 {soThanhVien}${suffix} 𝗺𝗲𝗺𝗯𝗲𝗿\n〘✨〙 𝗔𝗱𝗱𝗲𝗱 𝘁𝗼 𝘁𝗵𝗲 𝗴𝗿𝗼𝘂𝗽 𝗯𝘆: {author}\n〘✨〙 𝗔𝗱𝗱𝗲𝗱 𝗯𝘆 𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝗹𝗶𝗻𝗸: https://www.facebook.com/profile.php?id={uidAuthor}\n─────────────────\n[ {time} - {thu} ]` : msg = threadData.customJoin;
      var nameAuthor = await Users.getNameUser(event.author)
      msg = msg
        .replace(/\{iduser}/g, iduser.join(', '))
        .replace(/\{name}/g, nameArray.join(', '))
        .replace(/\{type}/g, (memLength.length > 1) ? '𝗬𝗢𝗨' : '𝗬𝗢𝗨')
        .replace(/\{soThanhVien}/g, memLength.join(', '))
        .replace(/\{threadName}/g, threadName)
        .replace(/\{author}/g, nameAuthor)
        .replace(/\{uidAuthor}/g, event.author)
        .replace(/\{buoi}/g, session)
        .replace(/\{time}/g, time)
        .replace(/\{thu}/g, thu);

      var formPush = { body: msg, attachment: abx, mentions }
      api.sendMessage(formPush, threadID);
      for (let ii = 0; ii < parseInt(id.length); ii++) {
        fs.unlinkSync(__dirname + `/cache/join/${ii}.png`)
      }
    } catch (e) { return console.log(e) };
  }
}