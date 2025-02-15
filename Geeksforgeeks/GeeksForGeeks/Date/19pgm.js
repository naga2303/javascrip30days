//How to get the first and last date of current month using JavaScript ?

var d1 = new Date()
//console.log(d1.getDate())
let fdate = new Date(d1.getFullYear(),d1.getMonth(),1)
let ldate = new Date(d1.getFullYear(),d1.getMonth()+1,0)

console.log("f"+fdate);
console.log('l'+ldate)