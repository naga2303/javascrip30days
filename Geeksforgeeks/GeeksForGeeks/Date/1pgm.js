//How to get tomorrow’s date in a string format in JavaScript ?

let d = new Date()

let date = d.getDate()+1;
console.log(date)
let month = d.getMonth()+1;
let year = d.getFullYear()
month = month.length ==1 ? month.padStart(2,0):month;
date = date.length ==1 ? date.padStart(2,0):date;

console.log(`${year}-${month}-${date}`)