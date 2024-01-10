let ar =[
    ["John", 12],
    ["Jack", 13],
    ["Matt", 14],
    ["Maxx", 15]
]
var counter =new Object({})
ar.forEach(element => {
   let key = element[0];
   let value = element[1];
   counter[key]=value
   
})
console.log(counter)


