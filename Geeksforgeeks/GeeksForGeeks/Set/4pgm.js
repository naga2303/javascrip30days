//How to sort a set in JavaScript ?

const st1 = new Set();
st1.add(23)
st1.add(21)
st1.add(1)
st1.add(5)
let ar = new Array()
 st1.forEach(element =>{
    ar.push(element)
 })

console.log(ar.sort((a,b)=> b-a))




