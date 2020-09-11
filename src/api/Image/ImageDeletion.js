"use scrict";
const rp = require("request-promise");

module.exports = async function (imageHash) {
	const options = {
		method: "DELETE",
		uri: `https://api.imgur.com/3/image/${imageHash}`,
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
			return err;
		});
};
