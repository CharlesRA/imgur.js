"use scrict";
const rp = require("request-promise");

module.exports = async function (username) {
	const options = {
		uri: `https://api.imgur.com/3/account/${username}`,
		headers: {
			Authorization: `Client-ID ${this.clientId}`,
		},
		json: true,
	};

	return rp(options)
		.then(function (response) {
			return response;
		})
		.catch(function (err) {
			return err;
		});
};
