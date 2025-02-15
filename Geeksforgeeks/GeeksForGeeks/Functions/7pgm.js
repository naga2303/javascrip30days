////How to encode and decode a URL in JavaScript ?
const url = "https://www.google.com/search?q=geeks%20for%20geeks";
const decodedURL = decodeURI(url);
console.log(decodedURL)

const encodedURL = encodeURI(url);
console.log(encodedURL)