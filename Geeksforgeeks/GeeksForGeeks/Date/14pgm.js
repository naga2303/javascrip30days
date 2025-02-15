//How to convert seconds to time string format hh:mm:ss using JavaScript ?

let givenSec = 3567;
let d1 = new Date(givenSec*1000)

console.log(d1.getHours()+":"+d1.getMinutes()+":"+d1.getSeconds())

