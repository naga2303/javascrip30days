//How to get the number of days in a specified month using JavaScript ?

let year = "2023";
let month ="11";
console.log(noOfDays(year,month))

console.log(new Date(year,month,0).getDate())

function noOfDays(y,m){
    return new Date(y,m,0).getDate()
}