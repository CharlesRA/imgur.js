require("dotenv").config();
const ImgurClient = require("../index");
const client = new ImgurClient({
	clientId: process.env.CLIENT_ID,
	accessToken: process.env.ACCESS_TOKEN,
});
const expect = require("chai").expect;

describe("Album", function () {
	it("getAlbumInformations", async function () {
		const result = await client.getAlbumInformations("U2IKcAG");
		expect(result.id).to.be.equal("U2IKcAG");
	});
	it("getAlbumImages", async function () {
		const result = await client.getAlbumImages("U2IKcAG");
		expect(result.length).to.be.equal(6);
	});
	it("changeAlbumFavoriteStatus", async function () {
		const result = await client.changeAlbumFavoriteStatus("naOyG");
		expect(result == "favorited" || result == "unfavorited").to.be.equal(
			true,
		);
	});
});
