//How to convert Map keys to an array in JavaScript ?
const m1 = new Map()
m1.set(5,'b')
m1.set(1,'a')
m1.set(9,'z')
m1.set(3,'c')
m1.set(2,'a')
let ar = []
for (let key of m1.keys())
{
    ar.push(key)
}
console.log(ar)