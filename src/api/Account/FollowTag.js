"use scrict";
const rp = require("request-promise");
const errors = require("../../error/errors.json");

module.exports = async function (tag) {
	if (!this.isLogged) {
		if (!this.accessToken) {
			console.log(errors.disconnected.noAccessToken);
		}
		return undefined;
	}
	const options = {
		method: "POST",
		uri: `https://api.imgur.com/3/account/me/follow/tag/${tag}`,
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
			if (err.error && err.error.data) {
				return err.error.data.error;
			}
			return "Error during request";
		});
};
