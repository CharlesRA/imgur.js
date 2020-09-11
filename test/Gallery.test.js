require("dotenv").config();
const ImgurClient = require("../index");
const client = new ImgurClient({clientId: process.env.CLIENT_ID});
const expect = require("chai").expect;

describe("Gallery", function () {});
