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

| Method                                              | Category |
| --------------------------------------------------- | -------- |
| [getAlbumInformations()](#getAlbumInformations)     | Album    |
| [getAlbumImages()](#getAlbumImages)                 | Album    |
| [getAccountInformations()](#getAccountInformations) | Account  |
| [isAccountBlocked()](#isAccountBlocked)             | Account  |
| [getAccountFavorites()](#getAccountFavorites)       | Account  |
| [getAccountImages()](#getAccountImages)             | Account  |
| [getImageInformations()](#getImageInformations)     | Image    |
| [getCommentInformations()](#getCommentInformations) | Comment  |
| [getCommentReplies()](#getCommentReplies)           | Comment  |

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

### getAccountFavorites

### getAccountInformations

```js
client.getAccountInformations("charlesra").then(console.log);
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

## Gallery

## Image

### getImageInformations

```js
client.getImageInformations("jXQHyU4").then(console.log);
```

## Contributing

Contributions welcome !
