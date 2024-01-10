//How to convert an Object {} to an Array [] of key-value pairs in JavaScript?

let obj1 ={
    empID:1,
    name:"Naga"
}
let e1 =Object.entries(obj1)
let ar = new Array();
e1.forEach(([key,value])=>{
ar.push(value)
})
console.log(ar)