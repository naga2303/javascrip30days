//How to sort a map in JavaScript ?

let m1 = new Map()
m1.set(5,'b')
m1.set(1,'a')
m1.set(9,'z')
m1.set(3,'c')
m1.set(2,'a')
let ar = new Array();
m1 = new Map([...m1.entries()].sort(function(a,b){
    return b[0] - a[0]
}))
for(let [key,value] of m1)
{
    console.log(key+'-'+value)
}