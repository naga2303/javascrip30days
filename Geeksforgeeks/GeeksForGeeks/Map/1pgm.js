//How to serialize a Map in JavaScript ?

const mp = new Map([
    [1,2],
    [3,4],
[5,6]])

console.log(Array.from(mp))
let ssr = Array.from(mp)
let stringly = JSON.stringify(ssr)
console.log(stringly)