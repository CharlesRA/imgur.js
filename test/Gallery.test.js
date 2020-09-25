require("dotenv").config();
const ImgurClient = require("../index");
const expect = require("chai").expect;

const unauthClient = new ImgurClient({clientId: process.env.CLIENT_ID});

describe("Gallery", function () {
	this.timeout(10000);
	it("getTagInfo", async function () {
		const result = await unauthClient.getTagInfo("fun");
		expect(result.name).to.be.equal("fun");
	});
});
