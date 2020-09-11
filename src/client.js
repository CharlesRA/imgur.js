const Account = require("./api/Account/Account");
const Album = require("./api/Album/Album");
const Comment = require("./api/Comment/Comment");
const Image = require("./api/Image/Image");

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

// Album functions
ImgurClient.prototype.getAlbumInformations = Album.AlbumBase;
ImgurClient.prototype.getAlbumImages = Album.AlbumImages;

// Comment functions
ImgurClient.prototype.getCommentInformations = Comment.CommentBase;
ImgurClient.prototype.getCommentReplies = Comment.Replies;

// Image Function
ImgurClient.prototype.getImageInformations = Image.ImageBase;

module.exports = ImgurClient;
