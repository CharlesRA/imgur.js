const Account = require("./api/Account/Account");

class ImgurClient {
	constructor(loginParams) {
		this.clientId = loginParams.clientId;
	}
}
// Account functions
ImgurClient.prototype.getAccountInformations = Account.AccountBase;

//
module.exports = ImgurClient;
