//How to get a key in a JavaScript object by its value ?

let obj = {
    name:"naga",
    empID: 81,
    company: "volante"
}

console.log(findKeys(obj,'volante'))

function findKeys(obje,value){
    return Object.keys(obje).filter(keys => obje[keys]==value)
}