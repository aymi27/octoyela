module.exports.config = {
  name: "help",
  version: "1.0.2",
  hasPermission: 0,
  credits: "Mirai Team & Mod by LeechShares",
  description: "Beginner's Guide",
  usePrefix: false,
  commandCategory: "guide",
  usages: "[Shows Commands]",
  cooldowns: 5,
  envConfig: {
		autoUnsend: true,
		delayUnsend: 60
	}
};

module.exports.languages = {
  en: {
    moduleInfo:
      "》%1《\n%2\n\n〘🧚🏻‍♀️〙 𝖴𝗌𝖺𝗀𝖾: %3\n〘🧚🏻‍♀️〙 𝖢𝖺𝗍𝖾𝗀𝗈𝗋𝗒: %4\n〘🧚🏻‍♀️〙 𝖶𝖺𝗂𝗍𝗂𝗇𝗀 𝗍𝗂𝗆𝖾: %5 𝗌𝖾𝖼𝗈𝗇𝖽𝗌(𝗌)\n〘🧚🏻‍♀️〙 𝖯𝖾𝗋𝗆𝗂𝗌𝗌𝗂𝗈𝗇: %6\n\n» 𝖬𝗈𝖽𝗎𝗅𝖾 𝖼𝗈𝖽𝖾 𝖻𝗒 %7 ",
    helpList:
      `〘🧚🏻‍♀️〙𝖳𝗁𝖾𝗋𝖾 𝖺𝗋𝖾 %1 𝖼𝗈𝗆𝗆𝖺𝗇𝖽𝗌 𝖺𝗇𝖽 %2 𝖼𝖺𝗍𝖾𝗀𝗈𝗋𝗂𝖾𝗌 𝗈𝗇 𝗍𝗁𝗂𝗌 𝖻𝗈𝗍.`,
    guideList:
      `〘🧚🏻‍♀️〙𝗨𝘀𝗲: "%1${this.config.name} ‹𝗰𝗼𝗺𝗺𝗮𝗻𝗱›" 𝘁𝗼 𝗸𝗻𝗼𝘄 𝗵𝗼𝘄 𝘁𝗼 𝘂𝘀𝗲 𝘁𝗵𝗮𝘁 𝗰𝗼𝗺𝗺𝗮𝗻𝗱!\n◖𝗧𝘆𝗽𝗲: "%1${this.config.name} ‹𝗽𝗮𝗴𝗲_𝗻𝘂𝗺𝗯𝗲𝗿›" 𝘁𝗼 𝘀𝗵𝗼𝘄 𝘁𝗵𝗮𝘁 𝗽𝗮𝗴𝗲 𝗰𝗼𝗻𝘁𝗲𝗻𝘁𝘀!\n\n✨🧜‍♀️▬▬▮𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢▮▬▬🧜‍♀️✨

〘🍥〙𝗡𝗔𝗠𝗘 : ► yoya ィ✨
〘🍥〙𝗙𝗕 𝗟𝗜𝗡𝗞 : ► https://www.facebook.com/100095262681590✨

𝗬𝗢𝗬𝗔 : please don't add yela to your gc's without my permission po, i will automatically out yela from your gc :>
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
〘🍥〙𝗥𝗲𝗺𝗶𝗻𝗱𝗲𝗿 : ► 𝚙𝚕𝚎𝚊𝚜𝚎 𝚙𝚊𝚔𝚒
  𝚛𝚎𝚙𝚘𝚛𝚝 𝚜𝚊𝚔𝚒𝚗 𝚒𝚏 𝚗𝚊𝚐 𝚍𝚘𝚠𝚗 𝚌𝚖𝚍𝚜 
  𝚗𝚒 𝚢𝚎𝚕𝚊 𝚝𝚢𝚜𝚖 ✨
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`,
    user: "User",
    adminGroup: "Admin group",
    adminBot: "Admin bot",
  },
};


module.exports.handleEvent = function ({ api, event, getText }) {
  const { commands } = global.client;
  const { threadID, messageID, body } = event;  

  if (!body || typeof body == "undefined" || body.indexOf("help") != 0)
    return;
  const splitBody = body.slice(body.indexOf("help")).trim().split(/\s+/);
  if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
  const command = commands.get(splitBody[1].toLowerCase());
  const prefix = threadSetting.hasOwnProperty("PREFIX")
    ? threadSetting.PREFIX
    : global.config.PREFIX;
  return api.sendMessage(
    getText(
      "moduleInfo",
      command.config.name,
      command.config.description,
      `${prefix}${command.config.name} ${
        command.config.usages ? command.config.usages : ""
      }`,
      command.config.commandCategory,
      command.config.cooldowns,
      command.config.hasPermission === 0
        ? getText("user")
        : command.config.hasPermission === 1
        ? getText("adminGroup")
        : getText("adminBot"),
      command.config.credits
    ),
    threadID,
    messageID
  );
};

module.exports.run = async function ({ api, event, args, getText }) {
  const { commands } = global.client;
  const { threadID, messageID } = event;
  const command = commands.get((args[0] || "").toLowerCase());
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
  const { autoUnsend, delayUnsend } = global.configModule[this.config.name];
  const prefix = threadSetting.hasOwnProperty("PREFIX")
    ? threadSetting.PREFIX
    : global.config.PREFIX;

  if (!command) {
    const commandList = Array.from(commands.values());
    const categories = new Set(commandList.map((cmd) => cmd.config.commandCategory.toLowerCase()));
    const categoryCount = categories.size;

    const categoryNames = Array.from(categories);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(categoryNames.length / itemsPerPage);

    let currentPage = 1;
    if (args[0]) {
      const parsedPage = parseInt(args[0]);
      if (
        !isNaN(parsedPage) &&
        parsedPage >= 1 &&
        parsedPage <= totalPages
      ) {
        currentPage = parsedPage;
      } else {
        return api.sendMessage(
          `◖Oops! You went too far! Please choose a page between 1 and ${totalPages}◗`,
          threadID,
          messageID
        );
      }
    }
    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    const visibleCategories = categoryNames.slice(startIdx, endIdx);

    let msg = "";
    for (let i = 0; i < visibleCategories.length; i++) {
      const category = visibleCategories[i];
      const categoryCommands = commandList.filter(
        (cmd) =>
          cmd.config.commandCategory.toLowerCase() === category
      );
      const commandNames = categoryCommands.map((cmd) => cmd.config.name);
      const numberFont = [
        "❶",
        "❷",
        "❸",
        "❹",
        "❺",
        "❻",
        "❼",
        "❽",
        "❾",
        "❿",
      ];
      msg += `╭[ ${numberFont[i]} ]─❍ ${
        category.charAt(0).toUpperCase() + category.slice(1)
      }\n╰─◗ ${commandNames.join(", ")}\n\n`;
    }

    const numberFontPage = [
      "❶",
      "❷",
      "❸",
      "❹",
      "❺",
      "❻",
      "❼",
      "❽",
      "❾",
      "❿",
      "⓫",
      "⓬",
      "⓭",
      "⓮",
      "⓯",
      "⓰",
      "⓱",
      "⓲",
      "⓳",
      "⓴",
    ];
    msg += `╭ ──────── ╮
│ Page ${numberFontPage[currentPage - 1]} of ${
      numberFontPage[totalPages - 1]
    } │\n╰ ──────── ╯\n`;
    msg += getText("helpList", commands.size, categoryCount, prefix);

    const axios = require("axios");
    const fs = require("fs-extra");
    const imgP = [];
    const img = [
      "https://i.imgur.com/ruQ2pRn.jpg",
      "https://i.imgur.com/HXHb0cB.jpg",
      "https://i.imgur.com/ZJEI6KW.jpg",
      "https://i.imgur.com/XGL57Wp.jpg",
      "https://i.imgur.com/6OB00HJ.jpg",
      "https://i.imgur.com/6vHaRZm.jpg",
      "https://i.imgur.com/k6uE93k.jpg"
    ];
    const path = __dirname + "/cache/menu.png";
    const rdimg = img[Math.floor(Math.random() * img.length)];

    const { data } = await axios.get(rdimg, {
      responseType: "arraybuffer",
    });

    fs.writeFileSync(path, Buffer.from(data, "utf-8"));
    imgP.push(fs.createReadStream(path));
    const config = require("./../../config.json")
    const msgg = {
  body: `╭──────────────╮\n│𝖢𝗈𝗆𝗆𝖺𝗇𝖽 & 𝖢𝖺𝗍𝖾𝗀𝗈𝗋𝗒│\n╰──────────────╯\n‣ Bot Owner: ${config.DESIGN.Admin}\n\n` + msg + `\n◖Total pages available: ${totalPages}.\n` + `\n╭ ──── ╮\n│ GUIDE │\n╰ ──── ╯\n` + getText("guideList", config.PREFIX),
  attachment: imgP,
};

    const sentMessage = await api.sendMessage(msgg, threadID, messageID);

    if (autoUnsend) {
      setTimeout(async () => {
        await api.unsendMessage(sentMessage.messageID);
      }, delayUnsend * 1000);
    }
  } else {
    return api.sendMessage(
      getText(
        "moduleInfo",
        command.config.name,
        command.config.description,
        `${prefix}${command.config.name} ${
          command.config.usages ? command.config.usages : ""
        }`,
        command.config.commandCategory,
        command.config.cooldowns,
        command.config.hasPermission === 0
          ? getText("user")
          : command.config.hasPermission === 1
          ? getText("adminGroup")
          : getText("adminBot"),
        command.config.credits
      ),
      threadID, messageID
    );
  }
};