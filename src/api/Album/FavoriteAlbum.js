"use scrict";
const rp = require("request-promise");
const errors = require("../../error/errors.json");

module.exports = async function (albumHash) {
	if (!this.isLogged) {
		if (!this.accessToken) {
			console.log(errors.disconnected.noAccessToken);
		}
		return undefined;
	}
	const options = {
		method: "POST",
		uri: `https://api.imgur.com/3/album/${albumHash}/favorite`,
		headers: {
			Authorization: `Bearer ${this.accessToken}`,
		},
		json: true,
	};

	return rp(options)
		.then(function (response) {
			return response.data;
		})
		.catch(function (err) {
			console.log(err);
			return "Error during request";
		});
};
