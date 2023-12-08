//How to convert a plain object into ES6 Map using JavaScript ?

let obj ={
    name:'naga',
    age:23,
    add:'Chennai'
}
function createMap(obj){
let map = new Map();
Object.keys(obj).forEach(key =>{
    map.set(key, obj[key])
})
return map;
}
function callMap()
{
    const map = createMap(obj)
    console.log(map)
}
callMap()