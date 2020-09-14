require("dotenv").config();
const ImgurClient = require("../index");
const unauthClient = new ImgurClient({clientId: process.env.CLIENT_ID});
const authClient = new ImgurClient({
	clientId: process.env.CLIENT_ID,
	accessToken: process.env.ACCESS_TOKEN,
});
const authClient2 = new ImgurClient({
	clientId: process.env.CLIENT_ID,
	accessToken: process.env.ACCESS_TOKEN2,
});
const expect = require("chai").expect;

describe("Comment", function () {
	this.timeout(10000);
	let id = 0;
	it("getCommentInformations", async function () {
		const result = await unauthClient.getCommentInformations("350694303");
		expect(result.id).to.be.equal(350694303);
	});
	it("getCommentReplies", async function () {
		const result = await unauthClient.getCommentReplies("350694303");
		expect(result.children.length >= 1).to.be.equal(true);
	});
	it("voteComment : up", async function () {
		const result = await authClient.voteComment("1376463171", "up");
		expect(result).to.be.equal(true);
	});
	it("voteComment : down", async function () {
		const result = await authClient.voteComment("1376463171", "down");
		expect(result).to.be.equal(true);
	});
	it("voteComment : veto", async function () {
		const result = await authClient.voteComment("1376463171", "veto");
		expect(result).to.be.equal(true);
	});
	it("voteComment : bad string", async function () {
		const result = await authClient.voteComment("1376463171", "bad string");
		expect(result).to.be.equal(undefined);
	});
	it("sendComment", async function () {
		const result = await authClient2.sendComment("qEA3ilr", "Unit test");
		id = result.id;
		expect(result.id == undefined).to.be.equal(false);
	});
	it("sendComment", async function () {
		const result = await authClient2.deleteComment(id);
		expect(result).to.be.equal(true);
	});
});
