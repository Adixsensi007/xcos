const axios = require("axios");
const fs = require("fs-extra");
const request = require("request");
module.exports = {
config: {
name: "Out",
aliases: ["l"],
version: "1.0",
author: "Sandy",
countDown: 5,
role: 2,
shortDescription: "bot will leave gc",
longDescription: "",
category: "admin",
guide: {
vi: "{pn} [tid,blank]",
en: "{pn} [tid,blank]"
}
},

onStart: async function ({ api,event,args, message }) {
var id;
if (!args.join(" ")) {
id = event.threadID;
} else {
id = parseInt(args.join(" "));
}
return api.sendMessage('আম্মু😌🌸𝗕𝗢𝗧 𝗟𝗘𝗔𝗩𝗘:\n》Ami toder sukh dewar jonno Ashchilam tora etar joggo na.\n\n➤𝗕𝗛𝗔𝗟𝗢 𝗧𝗛𝗔𝗞 𝗧𝗢𝗥𝗔', id, () => api.removeUserFromGroup(api.getCurrentUserID(), id))
}
}
