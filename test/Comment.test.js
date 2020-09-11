require("dotenv").config();
const ImgurClient = require("../index");
const client = new ImgurClient({clientId: process.env.CLIENT_ID});
const expect = require("chai").expect;

describe("Comment", function () {
	it("getCommentInformations", async function () {
		const result = await client.getCommentInformations("350694303");
		expect(result.id).to.be.equal(350694303);
	});
	it("getCommentReplies", async function () {
		const result = await client.getCommentReplies("350694303");
		expect(result.children.length >= 1).to.be.equal(true);
	});
});
