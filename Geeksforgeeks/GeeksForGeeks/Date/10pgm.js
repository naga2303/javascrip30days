//How to check a date is valid or not using JavaScript ?
const d = new Date("11/29/2023")
function isValidDate()
{
    console.log(d.isValid())
}
Date.prototype.isValid = function (){
    return this.getTime === this.getTime()
}
isValidDate()