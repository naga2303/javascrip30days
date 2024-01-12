//How to implement a filter() for Objects in JavaScript ?
let employees = [
    { name: "Tony Stark", department: "IT" },
    { name: "Peter Parker", department: "Pizza Delivery" },
    { name: "Bruce Wayne", department: "IT" },
    { name: "Clark Kent", department: "Editing" }
];

let ar = employees.filter(element => element.department =="IT")
for (let i=0;i<ar.length;i++){
    console.log(ar[i].name)
}