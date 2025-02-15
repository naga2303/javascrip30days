//How to get Month and Date of JavaScript in two digit format ?

var d1=new Date()
console.log("Today Date: "+d1.getDate())

dateToString(d1)

function dateToString(d){
    let dd = (d.getDate() < 10? '0':'') +d.getDate()
    console.log(dd)
}