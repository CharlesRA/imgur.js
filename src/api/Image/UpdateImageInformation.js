"use scrict";
const rp = require("request-promise");

module.exports = async function (imageHash, parameters) {
	const formData = {};
	if (parameters.title) {
		formData.title = parameters.title;
	}
	if (parameters.description) {
		formData.description = parameters.description;
	}
	const options = {
		method: "POST",
		uri: `https://api.imgur.com/3/image/${imageHash}`,
		headers: {
			Authorization: `Bearer ${this.accessToken}`,
		},
		formData: formData,
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
