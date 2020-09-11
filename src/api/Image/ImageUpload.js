"use scrict";
const rp = require("request-promise");
const errors = require("../../error/errors.json");

function handleErrors(context, parameters, anonymous) {
	if (!anonymous && !context.isLogged) {
		if (!context.accessToken) {
			console.log(errors.disconnected.noAccessToken);
		}
		return undefined;
	}
	if (!parameters.image && !parameters.video) {
		console.log(errors.upload.empty);
		return true;
	}
	if (parameters.image && parameters.video) {
		console.log(errors.upload.bothFormat);
		return true;
	}
}

module.exports = async function (parameters, anonymous = false) {
	if (handleErrors(this, parameters, anonymous) === true) {
		return undefined;
	}
	const formData = {
		title: parameters.title == undefined ? "" : parameters.title,
		description:
			parameters.description == undefined ? "" : parameters.description,
	};
	if (parameters.image) {
		formData.image = parameters.image;
	} else {
		formData.video = parameters.video;
	}

	const options = {
		method: "POST",
		uri: `https://api.imgur.com/3/image`,
		headers: {
			Authorization:
				anonymous === true
					? `Client-ID ${this.clientId}`
					: `Bearer ${this.accessToken}`,
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
