"use scrict";
const rp = require("request-promise");
const errors = require("../../error/errors.json");

module.exports = async function (username) {
	if (!this.isLogged) {
		if (!this.accessToken) {
			console.log(errors.disconnected.noAccessToken);
		}
		return undefined;
	}
	const options = {
		uri: `https://api.imgur.com/3/account/${username}/images`,
		headers: {
			Authorization: `Client-ID ${this.clientId}`,
		},
		json: true,
	};

	return rp(options)
		.then(function (response) {
			return response.data.blocked;
		})
		.catch(function (err) {
			return err;
		});
};
