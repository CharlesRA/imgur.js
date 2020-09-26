<h1 align="center">
  <img height="120px" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" />&nbsp;&nbsp;&nbsp;&nbsp;
  <img height="120px" src="https://s.imgur.com/images/logo-1200-630.jpg?2" />
</h1>

An unofficial powerful library for interacting with the Imgur API

## Install

```
npm install imgur-api.js
```

## Usage

```javascript
const ImgurClient = require("imgur-api.js");
const client = new ImgurClient({
	clientId: "myClientId",
	accessToken: "userAccessToken",
});
```

## API

| Method                                                    | Category |
| --------------------------------------------------------- | -------- |
| [changeAlbumFavoriteStatus()](#changeAlbumFavoriteStatus) | Album    |
| [getAlbumInformations()](#getAlbumInformations)           | Album    |
| [getAlbumImages()](#getAlbumImages)                       | Album    |
| [followTag()](#followTag)                                 | Account  |
| [getAccountAvatar()](#getAccountAvatar)                   | Account  |
| [getAccountInformations()](#getAccountInformations)       | Account  |
| [getAccountFavorites()](#getAccountFavorites)             | Account  |
| [getAccountImages()](#getAccountImages)                   | Account  |
| [getAccountReplies()](#getAccountReplies)                 | Account  |
| [getAccountCommentCount()](#getAccountCommentCount)       | Account  |
| [getAccountSettings()](#getAccountSettings)               | Account  |
| [getAccountsBlocked()](#getAccountsBlocked)               | Account  |
| [isAccountBlocked()](#isAccountBlocked)                   | Account  |
| [unfollowTag()](#unfollowTag)                             | Account  |
| [changeStatusFavoriteImage()](#changeStatusFavoriteImage) | Image    |
| [getImageInformations()](#getImageInformations)           | Image    |
| [upload()](#upload)                                       | Image    |
| [remove()](#remove)                                       | Image    |
| [updateImageInformation()](#updateImageInformation)       | Image    |
| [getCommentInformations()](#getCommentInformations)       | Comment  |
| [getCommentReplies()](#getCommentReplies)                 | Comment  |
| [voteComment()](#voteComment)                             | Comment  |
| [sendComment()](#sendComment)                             | Comment  |
| [deleteComment()](#deleteComment)                         | Comment  |
| [getDefaultTags()](#getDefaultTags)                       | Gallery  |
| [getGalleryImages()](#getGalleryImages)                   | Gallery  |
| [getGalleryTags()](#getGalleryTags)                       | Gallery  |
| [getImagesVotes()](#getImagesVotes)                       | Gallery  |
| [getTagInfo()](#getTagInfo)                               | Gallery  |
| [voteImage()](#voteImage)                                 | Gallery  |

## Album

### changeAlbumFavoriteStatus

```js
client.changeAlbumFavoriteStatus("naOyG").then(console.log);
```

### getAlbumInformations

```js
client.getAlbumInformations("U2IKcAG").then(console.log);
```

### getAlbumImages

```js
client.getAlbumImages("U2IKcAG").then(console.log);
```

## Account

### followTag

```js
client.followTag("doggo").then(console.log);
```

### isAccountBlocked

```js
client.isAccountBlocked("CharlesRaimbault").then(console.log);
```

### getAccountAvatar

```js
client.getAccountAvatar("CharlesRaimbault").then(console.log);
```

### getAccountFavorites

```js
client.getAccountFavorites("CharlesRaimbault").then(console.log);
```

### getAccountInformations

```js
client.getAccountInformations("CharlesRaimbault").then(console.log);
```

### getAccountImages

```js
client.getAccountImages("CharlesRaimbault").then(console.log);
```

### getAccountReplies

```js
client.getAccountReplies("CharlesRaimbault").then(console.log);
```

### getAccountsBlocked

```js
client.getAccountsBlocked().then(console.log);
```

### getAccountCommentCount

```js
client.getAccountCommentCount("CharlesRaimbault").then(console.log);
```

### getAccountSettings

```js
client.getAccountSettings().then(console.log);
```

### unfollowTag

```js
client.unfollowTag("doggo").then(console.log);
```

## Comment

### getCommentInformations

```js
client.getCommentInformations("350694303").then(console.log);
```

### getCommentReplies

```js
client.getCommentReplies("350694303").then(console.log);
```

### voteComment

```js
client.voteComment("myCommentId", "up").then(console.log);
```

### sendComment

```js
client.sendComment("myCommentId", "My super comment").then(console.log);
```

### deleteComment

```js
client.deleteComment("myCommentId").then(console.log);
```

## Gallery

### getGalleryImages

```js
client.getDefaultTags().then(console.log);
```

### getGalleryImages

```js
client.getGalleryImages("h4uIJt8").then(console.log);
```

### getGalleryTags

```js
client.getGalleryTags("h4uIJt8").then(console.log);
```

### getImagesVotes

```js
client.getImagesVotes("GYRs587").then(console.log);
```

### getTagInfo

```js
client.getTagInfo("fun").then(console.log);
```

### voteImage

```js
client.voteImage("GYRs587", "up").then(console.log);
```

## Image

## changeStatusFavoriteImage

```js
client.changeStatusFavoriteImage("jXQHyU4").then(console.log);
```

### getImageInformations

```js
client.getImageInformations("jXQHyU4").then(console.log);
```

### upload

```js
client
	.upload(
		{
			image:
				"https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg",
		},
		true,
	)
	.then(console.log);
```

### remove

```js
client.remove("imageId").then(console.log);
```

### updateImageInformation

```js
client.updateImageInformation("imageId", {title: "Title change", description: "Description change"})).then(console.log);
```

## Contributing

Contributions welcome !
