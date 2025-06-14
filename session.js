//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0c2am1wdlRxc0lNOHFwckllT1BKYW5IWlc4c3pSTE16MnVrTWswQitVZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiemU2WkxRRHlTY1dUMEJoZkk2Rk1LLzJQdTBqSzVxZHgwY0lCR3lPallIaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNRWptc2pEU2FmVVNEbkhhOHkxa1VXODNSQlRHa2tHbTFhbGhhdEtkMlhnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6Vlk4RkdwWTJ2d3VBblh5ODdFM3I5MmRyM0dXMTJkajVvWC9TWEJnUG1BPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFNdXlnekxEMG50TytDUmdSNW5OYkUrNjRnUzhpT3BCNFlJQlNZSDJySHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhyWHoxR1BjZCtOSWVUQ3crMjQvWTVlRGFTK3REK3h0ZkJzbC9LNmd0aEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMlBOS0tCNFo1OVYvR3YvbmIwQktmMDd5c2xLaVNVZUNZM2lWcVBjc0UyYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWDNpcFNDUjFxdnNxdHlHd1RyWUYyaDhpZFhPalFSMklKb3pjelo5WDNBdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlXeFJpREpjN290cnRXS3cxV1NEZ1QzZFZOUEJJT0liSjNQMVVHQVNyb1JiOTgvbUE3VUlTY2RkS0gxSm12SlRZSXJ5QzVhSHQvcUF6QzV2TG5lVGdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQxLCJhZHZTZWNyZXRLZXkiOiJSOXR5blVOUEdzTVdUaEFmcjhYVUN1cDlKM2pOa1grZzQrY0NvNDcyeE9VPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI5a2JOcUZJTVNfQ29ZV3BXbUVtSVVRIiwicGhvbmVJZCI6IjFiNDkxZjBiLTBkNWYtNDRkNC05YWRlLTcyMjc1NDhhYTJmOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNbzZxS2pBMGJNclJRY3l0Zk42eHNCam9wUEk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0lCd3I3Nzh2aWNDM0thNVFaTjNWaHl0Zkt3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjJXTThHS1pXIiwibWUiOnsiaWQiOiI5NDcwNjc0ODEwNDo1MEBzLndoYXRzYXBwLm5ldCIsImxpZCI6Ijc2OTE0NTU5NTY2MDI3OjUwQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTm10ck9jREVOL3p0TUlHR0FzZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNjhSTGswYkxlNXFERXdpMGkwMC9tNDVxbC9nV2pjbTBpejFNVkJOdmNEdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoieTF4RnM0amRHUlZ1ME5zUDBnTmdMTzlVazd0czlIMnR6QnowQ2JaOUltY3dxUFd2ZGdYWm55bFdSY1NHRjdaZFFoYVdMUUJsczhoS1BPMDBvd2pXQkE9PSIsImRldmljZVNpZ25hdHVyZSI6IlNMVkZPMno5K2FIZzN3WVZDVC9RWkd5MzhPRHdya054N3JveEZqeTl5N1FGb3pCaHpQNjRqWGt5VnVybnNtaDI3dkFicjN4Q0I1bjl6RWVEbzlyWmlnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MDY3NDgxMDQ6NTBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZXZFUzVOR3kzdWFneE1JdEl0TlA1dU9hcGY0Rm8zSnRJczlURlFUYjNBOCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ5ODkxNTY0LCJsYXN0UHJvcEhhc2giOiJQV2s1QiJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
