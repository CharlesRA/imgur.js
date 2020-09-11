require("dotenv").config();
const ImgurClient = require("../index");
const unauthClient = new ImgurClient({clientId: process.env.CLIENT_ID});
const authClient = new ImgurClient({clientId: process.env.CLIENT_ID, accessToken: process.env.ACCESS_TOKEN});
const expect = require("chai").expect;

describe("Image", function () {
	this.timeout(10000);
	let id = undefined;
	it("getImageInformations", async function () {
		const result = await unauthClient.getImageInformations("jXQHyU4");
		expect(result.id).to.be.equal("jXQHyU4");
	});
	it("changeStatusFavoriteImage", async function () {
		const result = await authClient.changeStatusFavoriteImage("jXQHyU4");
		expect(result === "favorited" || result === "unfavorited").to.be.equal(true);
	});
	it("upload", async function () {
		const result = await authClient.upload({image: "https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg"}, false);
		id = result.id;
		expect(typeof result.id).to.be.equal("string");
	});
	it("updateImageInformation", async function () {
		const result = await authClient.updateImageInformation(id, {title: "Title change", description: "Description change"});
		expect(result).to.be.equal(true);
	});
	it("remove", async function () {
		const result = await authClient.remove(id);
		expect(result).to.be.equal(true);
	});
});
