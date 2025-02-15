//Calculate current week number in JavaScript

let dt = new Date()
let dt2 = new Date(dt.getFullYear(),0,1)

//dt2.setFullYear(dt2.getFullYear(),1,1)

let diff = Math.floor((dt-dt2)/(1000*60*60*24))
console.log(diff)

//
console.log(Math.round((diff)/7))