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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0x0Y1RVSmx6QXNURkRhdlQyVE1aWE5TcjVWZnd4b0QwYzduRDIrc1hYST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0trV0VtSFFSWUdna2VwRHBzTmthNUJzNDJDS2lzU09pdzg5SGQwSHFuOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrSWNnN0dCV2JYdlJ4YzZlcTR5MGo4b0hwVWZ3OW1pZ0ViL1NLOHY3RUY0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3TmhVNk1qY28yTEIzVUkvSmFGck9PN0Rlc05RZHgxS2QxTDNEUlVpNDBJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlOTXA0UHR6WUlXNnlGMXp6a09ROVU1Wk1NY0ExclRYQzMvRGhiOWFhRWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhDaHdlTGd4MlNMN2Y0ditPQzFnUlZWVExqVU5PKy9OYi9DNWdMeTg5RG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUJOeU1qdmJiQW94M2s5VjZta2FKRkVDZERBdFlyZ2l1Z3J6YVhuNmJsWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiODduSVN5dmMvTUlreU9Ha0JaODQwV2JzMWxraHpoMUFjOERQNWNJYU1taz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlpNlJ0ZHg0Sm1PTkhXV3phcDJsZXdWMm1pcDVkSDZGNHhSUlJPUzJGUVE2WlNDejdqSzUzdGtsOHUrVUk4VG9UTkhpOHAxTEVtcUQxVEJYaGlnbmdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUyLCJhZHZTZWNyZXRLZXkiOiJ6dzR1SUc4M2R4TlE5QkxGb2lWVEs5UWNXUGxBb1dFKzhmSlRvdTJhaVNFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJVcmNiN3pCRFNsU05XQ2JnZU5IUVhBIiwicGhvbmVJZCI6IjJiZDU3NmRmLWVhYTctNDEwOC04ODE2LWY1OTMyMDc2YmYwOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuUG5laUdZMm9xc3dsa2lIVktZamEyRm5uRVE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSC9JdE1hSXRTRTIrQXoyL1A0bWd2UG1WMzljPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IllURVlGWjFBIiwibWUiOnsiaWQiOiI5NDc3NDExNTUxMjo4QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTY4Njc2NTUyNjY3MzY0OjhAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNcmR0cVlERUtucW5zSUdHQWtnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJueUtoWDBldGJBRkJzRHlManUrVWFER24wWUFKYmUwdzNTZ29oaWpjeUhzPSIsImFjY291bnRTaWduYXR1cmUiOiJWVFFVdU9zcHozelQzNzVMSWp1VFNIUG9yWDY2SmV3VWRVb2pMQXVWd2owK0xjbnFIZ25HdVpuVTJtV1dTcC9XclppNHhQNE93UGxsU0RlV0Y3Z0tDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQmc1V0VDUnJPNWhIZUQrWHluS3ZUczdzRXFCWEJmTURFdDFYSlg5UUk2bGNrTGswelRVek04YmJtbE5SSG9HbGVSRVg3LzQ5V0lhMWNwZ1hFak1rZ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc3NDExNTUxMjo4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlo4aW9WOUhyV3dCUWJBOGk0N3ZsR2d4cDlHQUNXM3RNTjBvS0lZbzNNaDcifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0OTUyOTkxMCwibGFzdFByb3BIYXNoIjoiM1I5WjM5IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDcHkifQ==",
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
