//How to calculate minutes between two dates in JavaScript ?

var d1 = new Date("11/10/2023")
var d2 = new Date("11/16/2023")

let diff = d2-d1;
console.log(diff)
console.log((((diff/1000)/60)/60)/24)