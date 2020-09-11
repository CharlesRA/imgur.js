require("dotenv").config();
const ImgurClient = require("../index");
const client = new ImgurClient({clientId: process.env.CLIENT_ID});
const expect = require("chai").expect;

describe("Account", function () {
	it("isAccountBlocked", async function () {
		const result = await client.isAccountBlocked("charlesra");
		expect(result).to.be.equal(false);
	});
	it("getAccountFavorites", async function () {
		const result = await client.getAccountFavorites("charlesra");
		expect(result.length > 0).to.be.equal(true);
	});
	it("getAccountInformations", async function () {
		const result = await client.getAccountInformations("charlesra");
		expect(result.id).to.be.equal(114360911);
	});
});
