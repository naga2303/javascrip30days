//How to check if date is less than 1 hour ago using JavaScript ?

var d1 = new Date()
console.log("Before less:" + d1)
const hoursToLess = 2
let currentHours = d1.getHours()
console.log(currentHours)
d1.setHours(d1.getHours()-hoursToLess)
console.log("After Less:"+d1)
let prevHours=d1.getHours()
console.log(prevHours)

if(prevHours<currentHours)
{
    console.log('It is less')
}