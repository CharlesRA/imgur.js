(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Imgur = factory());
}(this, (function () { 'use strict';

	// const Account = require("./api/Account/Account");
	// const Album = require("./api/Album/Album");
	// const Comment = require("./api/Comment/Comment");
	// const Image = require("./api/Image/Image");

	class ImgurClient {
		constructor(loginParams) {
			this.clientId = loginParams.clientId;
			this.accessToken = loginParams.accessToken;
			this.isLogged = loginParams.accessToken != undefined;
		}
	}

	return ImgurClient;

})));
