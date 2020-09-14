"use scrict";
const rp = require("request-promise");
const errors = require("../../error/errors.json");

module.exports = async function (commentId) {
	if (!this.isLogged) {
		if (!this.accessToken) {
			console.log(errors.disconnected.noAccessToken);
		}
		return undefined;
	}
	const options = {
		method: "DELETE",
		uri: `https://api.imgur.com/3/comment/${commentId}`,
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
			return "Error during request";
		});
};