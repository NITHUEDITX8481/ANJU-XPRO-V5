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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUEyczRJT0p0YUlWWWtZNC9sUmxTQytTRXU0OVJ2bGJGd3J5UEVwRXprST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZFAwQ1FzekY4TktZdDdGV3FQRzZhaU1vWVNBQUJiUXBJb3RQQmxQVC9IST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVR0ZDU29EQzl4VjJYNVRrak01OEZWYkliR1pZZ2RTT0Fka0tEcnFlR0U4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3blp6LzZHZWl0Mms4dFg5VGZvTjBsdk5LcG5CRWhyaEVhTVdZOG1zWFU4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdFSUpNTEpTRVhhM1Bma2JPUENhZHcvRWF1cUM2WTVkQTYvVGFaam9hSEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRWWGJoSjd2UDByVkhXRnJkS1BxdGNaMVJENUJVY1VHd2xDUXlWRjFhd0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUhjdmk3VTBkL0ExTHFuYUZvcXBKU3VOOVhWVURDYWl2U0g0TVlvbDkwYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWVA4Tk9XUklvWGlCVVZSY1daaUdmWU9JVlhNSjBjMVo4SmwrcWNkYllrZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZrcE9iUjFXbkpVeldMMTRKSUQxcXBoc1ZpNmdmaVFFaVVraEVHMUJxMmNRSjk4bnNGYVV0ZUIyckx3cHRaREpZYklpRHZxaHlyWS9KWlhZdWRPZWdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI5LCJhZHZTZWNyZXRLZXkiOiJ1WFRMMmZZMDliTmlMdUhOOVU0SDBpVFlkMVNSL05mRXNIaFp3S3poZDZjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJtRERMekNVRlJadUF3TUZCanJGSXVnIiwicGhvbmVJZCI6ImE3OTc5YjQwLTk1ZjgtNDRmYi04NWIyLWEwMDZmNTc3YzAzNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYZ2xpbTg5UWR0U3NmQ3ZwMXhCS3lrd0x4L2c9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaVdENUJwQTVKcFlUMDBoQTYrWDVra215b3M0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlYxWE5FQ1hKIiwibWUiOnsiaWQiOiI5NDc0MDAwNTUxMjo5N0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJubyBuYW1lIiwibGlkIjoiMTg1MTE4NDU5NDE0MDc6OTdAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNORHE0ZklHRUxuQ3FzSUdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIxR0d3eFZSOVlCcFB5WlFYMWY4Mm9SdkxrYzc0amlCdzZQTGpjZUlkWkZvPSIsImFjY291bnRTaWduYXR1cmUiOiJWbzh3UkkzVHllMFF6SU1DcWlXVTZsMDZGVW9WQnhOU0F1a3dHcEFTUndIQ3A2UDhveE0vVDEvYUYxdCswZ0poclBrZGRzRnpHVFVOY0ZVVkxYRHBBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRDhDNWJWSWdaZFFQUFBSSkd2dTJ1Z1JoZ2RZbDZwVStKMEo3eWNrRUMzLy9GRVBhTmdOQUVQMWtQTEcxSWJRcWR4empuakU0aEdsNXlROHdjWDcraEE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc0MDAwNTUxMjo5N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkUmhzTVZVZldBYVQ4bVVGOVgvTnFFYnk1SE8rSTRnY09qeTQzSGlIV1JhIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDk3MjE0MTQsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUEF3In0=",
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
