const Account = require("./api/Account/Account");

class ImgurClient {
	constructor(loginParams) {
		this.clientId = loginParams.clientId;
		this.accessToken = loginParams.accessToken;
		this.isLogged = !loginParams.accessToken == undefined;
	}
}
// Account functions
ImgurClient.prototype.getAccountInformations = Account.AccountBase;
ImgurClient.prototype.isAccountBlocked = Account.AccountBlockStatus;
ImgurClient.prototype.getAccountImages = Account.AccountImages;
ImgurClient.prototype.getAccountFavorites = Account.AccountFavorites;

//
module.exports = ImgurClient;
