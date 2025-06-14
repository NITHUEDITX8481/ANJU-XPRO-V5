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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEFjM3VGVEEyaTA0aHhxQlJWRWRQMm52SlJxa1RlNTVwelZydmFQR1cxOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUnZJWGtXcVdQa3BHM2VKSnpMQUI2Q0wzNHBFQWpGb0k4dEh0NGxRQVFuQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJSmo0djNPSFJzc0hPVkE1TUM0TXFYTzF6ZklrMG4rT1BvLzF0Y04vTzEwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJydTBIRC9nSDlOTjFoSUlFNkcrNUN1TTY0Q0xPUEUxbXRDa2dBVkFMekhFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9IdVhyYWZvTlNuRllFTzE5WVNLYmtRRFRHNUZCallJbVNLcStQYUNwMDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik00SmhuTlZpTDNhLy9nYzJYZHlqMW1NeUROdHJYVGJjYy9WNnBOUHJsMWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUhZa0hLSHdvRThlYXNiWmQrOVV1YkdHOHJKZHh3bXFtRzJtME5EN1VHZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVW5pSE4xOGdUaUowbkIwT1YzdVp6ZE5QTkVGZU9qY0lKeE8xR0pIb3VRWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkwxOW9MV1ZBc0ZndVZOWHpSTHNpR3FPWFIwTmsxeWZaOE1FZ1l6Mm1yYmkvcTE0MDlXWGZMSnVHWkJEUThqRkpqRzIzYjR1WnAzcWxPWlhQUTFMd2dnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ4LCJhZHZTZWNyZXRLZXkiOiJPVGZLd1hac0MrWnZvK1Y4V25kdTgzK1NNREtHdGVjWVdJNElqZWRMaURvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJmUnVvVVY3RlFKLTd4SXhZX1VGWG9RIiwicGhvbmVJZCI6ImZkODRlMDdmLWU1NTctNDhlMy1hYWE5LTgzZDQ0YTgyODRkZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkRVpRY2xHcnZTUmQyaUVnS3Q5Qjl5bnQ2SHc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUFpQ3FSZThiUGtMWjZCUDF6bk0rWTVYdllnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjhFUjRBNzI4IiwibWUiOnsiaWQiOiI5NDc0MDAwNTUxMjoyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Im5vIG5hbWUiLCJsaWQiOiIxODUxMTg0NTk0MTQwNzoyQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTkxxNGZJR0VOM3Z0TUlHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMUdHd3hWUjlZQnBQeVpRWDFmODJvUnZMa2M3NGppQnc2UExqY2VJZFpGbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoid2t3eDFMMWwxeTgxbWZMRUxocGd2SWxJR3NVSUMzOUpvSnF2b2s5Vlp6MVZickRoeU15dUJTd3FwUDNXcytuaWptQUFqdVhnYVBqSW1XVkRaT0pVQlE9PSIsImRldmljZVNpZ25hdHVyZSI6IjJrODRPSFVwb0JYK3lwbXBsSkxYYU42bkVYV0tVeFFDTitEM2t3dTNyeVhrTHBmMFBaNVNhZEZrb2p6UXFRSXVMR3B3OUhkdWJjSEVOVnJrT2FEWWlBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NDAwMDU1MTI6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkUmhzTVZVZldBYVQ4bVVGOVgvTnFFYnk1SE8rSTRnY09qeTQzSGlIV1JhIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDk4OTEwNTAsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSJ9",
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
