//How to compare two objects to determine the first object contains equivalent property values to the second object in JavaScript ?

let obj1 = {
    name:"john",
    age:23,
    add:"Chennai"
}
let obj2 = {
    age:23,
    add:"Chennai"
}

/*function stingyObj(obj1,obj2){
    let a = JSON.stringify(obj1)
    let b = JSON.stringify(obj2)

    return a ==b
}*/

//using entries
function entries(obj1,bj2){
    let e1 = Object.entries(obj1)
    let e2 = Object.entries(obj2)

    console.log(e1.length == e2.length)
}

console.log(entries(obj1,obj2))