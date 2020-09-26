require("dotenv").config();
const ImgurClient = require("../index");
const expect = require("chai").expect;

const unauthClient = new ImgurClient({clientId: process.env.CLIENT_ID});
const authClient = new ImgurClient({
	clientId: process.env.CLIENT_ID,
	accessToken: process.env.ACCESS_TOKEN,
});

describe("Gallery", function () {
	this.timeout(10000);
	it("getDefaultTags", async function () {
		const result = await unauthClient.getDefaultTags();
		expect(result.tags.length > 100).to.be.equal(true);
	});
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
	it("getImagesVotes", async function () {
		const result = await unauthClient.getImagesVotes("GYRs587");
		expect(typeof result.ups).to.be.equal("number");
		expect(typeof result.downs).to.be.equal("number");
	});
	it("voteImage : up", async function () {
		const result = await authClient.voteImage("GYRs587", "up");
		expect(result).to.be.equal(true);
	});
	it("voteImage : down", async function () {
		const result = await authClient.voteImage("GYRs587", "down");
		expect(result).to.be.equal(true);
	});
	it("voteImage : veto", async function () {
		const result = await authClient.voteImage("GYRs587", "veto");
		expect(result).to.be.equal(true);
	});
	it("voteImage : bad string", async function () {
		const result = await authClient.voteImage("GYRs587", "bad string");
		expect(result).to.be.equal(undefined);
	});
});
