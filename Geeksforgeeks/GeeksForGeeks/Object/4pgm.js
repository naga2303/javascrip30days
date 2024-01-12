//How to modify an object’s property in an array of objects in JavaScript ?

let employees_data = [
    {
        employee_id: 1,
        employee_name: "Aman",
    },
    {
        employee_id: 2,
        employee_name: "Bhargava",
    },
    {
        employee_id: 3,
        employee_name: "Chaitanya",
    },
];
let ar = employees_data.map(key =>{
    if(key.employee_id==2)
    {
       return {...key,employee_name:'Naga'}
    }
    return key;
})
console.log(ar)