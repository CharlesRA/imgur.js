"use scrict";
const rp = require("request-promise");

module.exports = async function (username, page, favoritesSort = "newest") {
	const options = {
		uri: `https://api.imgur.com/3/account/${username}/favorites`,
		headers: {
			Authorization: `Client-ID ${this.clientId}`,
		},
		json: true,
	};

	return rp(options)
		.then(function (response) {
			return response.data;
		})
		.catch(function (err) {
			return err;
		});
};
