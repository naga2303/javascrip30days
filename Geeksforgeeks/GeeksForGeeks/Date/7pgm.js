//How to check if the given date is weekend ?

var d1 = "12/03/2023"

d1 = new Date(d1);
var day = d1.getDay()
console.log(day)
if(day ==6 || day ==0)
{
    console.log('It is weekend!!!')
}