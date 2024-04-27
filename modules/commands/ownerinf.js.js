module.exports.config = {
  name: "ownerinfo",
  version: "1.0.0",
  usePrefix: "true",
  hasPermssion: 0,
  credits: "Gpt",
  description:  "Owner infooooooooo",
  commandCategory: "ownerinfoow",
  usages: "ownerinfo",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://add.pics/images/2023/10/28/FB_IMG_16985108441390873.jpeg"
     ];
     var callback = () => api.sendMessage({body:`OWNER: Rejard Bentazar\n\nFB: https://www.facebook.com/rejardbentazarofficial\n\nMESSAGE:Hi hindi po ako mamaw sa programming pero madale ko maiintindihan ang mga programming languages , alam mo kung bakit?naiintindihan ko nga Jowa ko eto pa kaya😛󱢏\nPa add naman🥺`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };