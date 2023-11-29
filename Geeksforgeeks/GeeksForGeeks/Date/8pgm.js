//How to format current date in MM/DD/YYYY HH:MM:SS format using JavaScript ?

var d1 = new Date()
//console.log(d1)
//Wed Nov 29 2023 15:42:43 GMT+0530 (India Standard Time)

let str = [d1.getMonth()+1,'/',d1.getDate(),'/',d1.getFullYear(), ' ',d1.getHours(),':',d1.getMinutes(),':',d1.getSeconds()]
console.log(str.join(''))