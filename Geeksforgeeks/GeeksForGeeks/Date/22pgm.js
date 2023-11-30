//How to get the current date and time in seconds ?

let dateM = new Date()
//console.log(Date.now())

let dateinsecs = Math.round(dateM/1000)
let dateInWords = new Date(dateM)

console.log(dateM)
console.log(dateinsecs)
console.log(dateInWords)