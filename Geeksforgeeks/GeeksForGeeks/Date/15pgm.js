//How to calculate the date three months prior using JavaScript ?

var d1 = new Date()

//console.log(d1.getDate()+"/"+d1.getMonth())
console.log(d1.toLocaleDateString())

d1.setMonth(d1.getMonth()-3)

console.log(d1.toLocaleDateString())

