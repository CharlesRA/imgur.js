const Account = require("./api/Account/Account");
const Album = require("./api/Album/Album");
const Comment = require("./api/Comment/Comment");
const Gallery = require("./api/Gallery/Gallery");
const Image = require("./api/Image/Image");

class ImgurClient {
	constructor(loginParams) {
		this.clientId = loginParams.clientId;
		this.accessToken = loginParams.accessToken;
		this.isLogged = loginParams.accessToken != undefined;
	}
}
// Account functions
// ImgurClient.prototype.blockAccount = Account.AccountBlockCreate;
ImgurClient.prototype.followTag = Account.FollowTag;
ImgurClient.prototype.getAccountAvatar = Account.AccountAvatar;
ImgurClient.prototype.getAccountInformations = Account.AccountBase;
ImgurClient.prototype.getAccountImages = Account.AccountImages;
ImgurClient.prototype.getAccountFavorites = Account.AccountFavorites;
ImgurClient.prototype.getAccountReplies = Account.AccountReplies;
ImgurClient.prototype.getAccountSettings = Account.AccountSettings;
ImgurClient.prototype.getAccountsBlocked = Account.AccountBlocks;
ImgurClient.prototype.getAccountCommentCount = Account.CommentCount;
ImgurClient.prototype.isAccountBlocked = Account.AccountBlockStatus;
ImgurClient.prototype.unfollowTag = Account.UnfollowTag;

// Album functions
ImgurClient.prototype.getAlbumInformations = Album.AlbumBase;
ImgurClient.prototype.getAlbumImages = Album.AlbumImages;
ImgurClient.prototype.changeAlbumFavoriteStatus = Album.FavoriteAlbum;

// Comment functions
ImgurClient.prototype.getCommentInformations = Comment.CommentBase;
ImgurClient.prototype.getCommentReplies = Comment.Replies;
ImgurClient.prototype.voteComment = Comment.Vote;
ImgurClient.prototype.sendComment = Comment.CommentCreation;
ImgurClient.prototype.deleteComment = Comment.CommentDeletion;

// Gallery functions
ImgurClient.prototype.getDefaultTags = Gallery.GalleryTags;
ImgurClient.prototype.getGalleryImages = Gallery.GalleryImage;
ImgurClient.prototype.getGalleryTags = Gallery.GalleryItemTags;
ImgurClient.prototype.getImagesVotes = Gallery.AlbumImageVotes;
ImgurClient.prototype.getTagInfo = Gallery.GalleryTagInfo;
ImgurClient.prototype.voteImage = Gallery.AlbumImageVoting;

// Image Function
ImgurClient.prototype.getImageInformations = Image.ImageBase;
ImgurClient.prototype.changeStatusFavoriteImage = Image.FavoriteAnImage;
ImgurClient.prototype.upload = Image.ImageUpload;
ImgurClient.prototype.updateImageInformation = Image.UpdateImageInformation;
ImgurClient.prototype.remove = Image.ImageDeletion;

module.exports = ImgurClient;
