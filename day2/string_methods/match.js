// match: it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null. Let us see how a regular expression pattern looks like. It starts with / sign and ends with / sign.
let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
let patternone=/love/
let patterntwo=/you/gi //g-means search whole text and i means case insensitive
console.log(string.match(patternone))