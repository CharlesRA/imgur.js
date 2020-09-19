require("dotenv").config();
const ImgurClient = require("../index");
const unauthClient = new ImgurClient({clientId: process.env.CLIENT_ID});
const authClient = new ImgurClient({
	clientId: process.env.CLIENT_ID,
	accessToken: process.env.ACCESS_TOKEN,
});
const expect = require("chai").expect;

describe("Account", function () {
	this.timeout(10000);
	it("isAccountBlocked", async function () {
		const result = await unauthClient.isAccountBlocked("charlesRaimbault");
		expect(result).to.be.equal(false);
	});
	it("getAccountAvatar", async function () {
		const result = await authClient.getAccountAvatar("charlesRaimbault");
		expect(typeof result.avatar).to.be.equal("string");
	});
	it("getAccountFavorites", async function () {
		const result = await unauthClient.getAccountFavorites(
			"charlesRaimbault",
		);
		expect(result.length > 0).to.be.equal(true);
	});
	it("getAccountInformations", async function () {
		const result = await unauthClient.getAccountInformations(
			"charlesRaimbault",
		);
		expect(result.id).to.be.equal(138316051);
	});
	it("getAccountImages", async function () {
		const result = await authClient.getAccountImages("charlesRaimbault");
		expect(result.length > 0).to.be.equal(true);
	});
	it("getAccountReplies", async function () {
		const result = await authClient.getAccountReplies();
		expect(result).to.not.be.equal(undefined);
	});
	it("getAccountSettings", async function () {
		const result = await authClient.getAccountSettings();
		expect(result.account_url).to.be.equal("CharlesRaimbault");
	});
});
