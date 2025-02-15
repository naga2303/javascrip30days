//How to get the first day of the year in JavaScript ?
var d1 = new Date()
//d1.setDate()

console.log( new Date(d1.getFullYear(),0,1).getDay())
