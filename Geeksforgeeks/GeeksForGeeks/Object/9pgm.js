//How to add and remove properties from objects in JavaScript ?

const p = {
    name: "naga",
    empid: 23
}
//adding the properties

p.add = "Chennai"
p.sal = 10000;

console.log(Object.values(p))
//Removing the properties

delete p.sal;

console.log(Object.values(p))
