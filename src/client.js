const Account = require("./api/Account/Account");

class ImgurClient {
	constructor(loginParams) {
		this.clientId = loginParams.clientId;
	}
}
// Account functions
ImgurClient.prototype.AccountBase = Account.AccountBase;

//
module.exports = ImgurClient;
