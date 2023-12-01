//How to get the current date and time in seconds ?

var d1 = new Date();

console.log(Date.now())
let milli = Date.now()
console.log("Time in millseconds"+Math.round(milli/1000))