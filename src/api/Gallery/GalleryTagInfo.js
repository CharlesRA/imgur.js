"use scrict";
const rp = require("request-promise");

module.exports = async function (tag) {
	const options = {
		method: "GET",
		uri: `https://api.imgur.com/3/gallery/tag_info/${tag}`,
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
			return "Error during request";
		});
};
