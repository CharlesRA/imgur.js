require("dotenv").config();
const ImgurClient = require("../index");
const expect = require("chai").expect;

const unauthClient = new ImgurClient({clientId: process.env.CLIENT_ID});

describe("Gallery", function () {
	this.timeout(10000);
	it("getGalleryImages", async function () {
		const result = await unauthClient.getGalleryImages("h4uIJt8");
		expect(result.datetime).to.be.equal(1600957033);
	});
	it("getGalleryTags", async function () {
		const result = await unauthClient.getGalleryTags("h4uIJt8");
		expect(result.length > 0).to.be.equal(true);
	});
	it("getTagInfo", async function () {
		const result = await unauthClient.getTagInfo("fun");
		expect(result.name).to.be.equal("fun");
	});
});
