"use scrict";

const rp = require("request-promise");
const errors = require("../../error/errors.json");

module.exports = async function (imageId, comment, parentId) {
	if (!this.isLogged) {
		if (!this.accessToken) {
			console.log(errors.disconnected.noAccessToken);
		}
		return undefined;
	}
	const formData = {
		image_id: imageId,
		comment: comment,
	};
	if (parentId) {
		formData.parent_id = parentId;
	}

	const options = {
		method: "POST",
		uri: `https://api.imgur.com/3/comment`,
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
			console.log(err);
			return "Error during request";
		});
};
