//difference between two dates

var d1 = new Date('2023/01/01')
var d2 = new Date('2024/12/31')

console.log(d1.getTime())
console.log(d2.getTime())

let diff = d2-d1;
console.log((((Math.round(diff/1000)/60)/60)/24))