"use scrict";
const rp = require("request-promise");

module.exports = async function (username) {
	const options = {
		method: "GET",
		uri: `https://api.imgur.com/account/v1/${username}/block`,
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
			return "Error during request";
		});
};
