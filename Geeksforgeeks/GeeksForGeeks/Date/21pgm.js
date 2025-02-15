//How to remove time from date using JavaScript ?

let d1 = new Date();
//One Way
console.log(d1.toLocaleDateString())

let d2 = '12/05/2019 12:00:00 AM'
console.log(d2.split(' ')[0])