//How to convert UTC date time into local date time using JavaScript ?
/**
 * var theDate = new Date(Date.parse(UTC Date))
 */
let d = new Date()
let utcDate = d.getUTCDate()
let utcMonth = d.getUTCMonth()
let utcYear = d.getUTCFullYear()

console.log(utcDate+'-'+utcMonth+'-'+utcYear)