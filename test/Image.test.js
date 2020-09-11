require("dotenv").config();
const ImgurClient = require("../index");
const client = new ImgurClient({clientId: process.env.CLIENT_ID});
const expect = require("chai").expect;

describe("Image", function () {
	it("getImageInformations", async function () {
		const result = await client.getImageInformations("jXQHyU4");
		expect(result.id).to.be.equal("jXQHyU4");
	});
});
