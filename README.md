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
const client = new ImgurClient({clientId: "myClientId"});
```

## API

| Method                                                    | Category |
| --------------------------------------------------------- | -------- |
| [getAlbumInformations()](#getAlbumInformations)           | Album    |
| [getAlbumImages()](#getAlbumImages)                       | Album    |
| [getAccountInformations()](#getAccountInformations)       | Account  |
| [isAccountBlocked()](#isAccountBlocked)                   | Account  |
| [getAccountFavorites()](#getAccountFavorites)             | Account  |
| [getAccountImages()](#getAccountImages)                   | Account  |
| [getAccountSettings()](#getAccountSettings)               | Account  |
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

---

## Album

### getAlbumInformations

```js
client.getAlbumInformations("U2IKcAG").then(console.log);
```

### getAlbumImages

```js
client.getAlbumImages("U2IKcAG").then(console.log);
```

## Account

### isAccountBlocked

```js
client.isAccountBlocked("charlesra").then(console.log);
```

### getAccountAvatar

```js
client.getAccountAvatar("charlesra").then(console.log);
```

### getAccountFavorites

```js
client.getAccountFavorites("charlesra").then(console.log);
```

### getAccountInformations

```js
client.getAccountInformations("charlesra").then(console.log);
```

### getAccountImages

```js
client.getAccountImages("charlesra").then(console.log);
```

### getAccountReplies

```js
client.getAccountReplies("charlesra").then(console.log);
```

### getAccountSettings

```js
client.getAccountSettings().then(console.log);
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
