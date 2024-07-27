//How to Check a Value Exist at Certain Array Index in JavaScript ?
let arr = [1, 2, 3, 4, 5]; 
let value = 3; 
console.log(fs(arr,value))
function fs(a,v)
{
    return a.includes(v)
}