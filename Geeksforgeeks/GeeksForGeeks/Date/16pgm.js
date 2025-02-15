//How to calculate the yesterday’s date in JavaScript ?

var d1 = new Date();
d1.setDate(d1.getDate()-1)
console.log(d1)
