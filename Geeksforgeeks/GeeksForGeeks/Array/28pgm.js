//How to create an array containing 1…N numbers in JavaScript ?

let N=12;
let ar = createAr(N)
console.log(ar)

function createAr(num){
    return [...Array(num).keys()].map(i=>i+1)
}