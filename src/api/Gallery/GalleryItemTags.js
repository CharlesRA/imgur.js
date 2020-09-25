"use scrict";
const rp = require("request-promise");

module.exports = async function (galleryHash) {
	const options = {
		method: "GET",
		uri: `https://api.imgur.com/3/gallery/${galleryHash}/tags`,
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
