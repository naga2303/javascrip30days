//How to convert a number into array in JavaScript ?

//using map method
var num =23;

let ar = String(num).split('').map((num)=>{
    return Number(num)
})
console.log(ar)

