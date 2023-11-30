//How to get Month and Date of JavaScript in two digit format ?

var d1=new Date()
let month = d1.getMonth()-5;
let date = d1.getDate()-29;

console.log(month.length)
date = date.length==1 ? date.padStart(2,0):date
month = month.length ==1 ? month.padStart(2,0):month;
console.log(`${month}`)

