require("dotenv").config();
const ImgurClient = require("../index");
const client = new ImgurClient({clientId: process.env.CLIENT_ID});
// client.getAccountInformations("username").then(console.log);
// client.isAccountBlocked("username").then(console.log);
client.getAccountImages("charlesra").then(console.log);
