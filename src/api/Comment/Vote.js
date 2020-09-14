"use scrict";

const rp = require("request-promise");
const errors = require("../../error/errors.json");

module.exports = async function (commentId, vote) {
	const supportedVote = ["up", "down", "veto"];
	if (!this.isLogged) {
		if (!this.accessToken) {
			console.log(errors.disconnected.noAccessToken);
		}
		return undefined;
	}
	if (supportedVote.indexOf(vote) == -1) {
		console.log(errors.vote.unknown);
		return undefined;
	}
	const options = {
		method: "POST",
		uri: `https://api.imgur.com/3/comment/${commentId}/vote/${vote}`,
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
