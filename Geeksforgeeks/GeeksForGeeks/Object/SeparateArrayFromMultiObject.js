//How to Separate Array of Objects into Multiple Objects in JavaScript ?

const array = [
    { id: 1, category: "A", value: "apple" },
    { id: 2, category: "B", value: "banana" },
    { id: 3, category: "A", value: "avocado" },
];

const groupedObjs = array.reduce((result,obj)=>{
    (result[obj.category]=result[obj.category] || []).push(obj);
    return result
},{})
console.log(groupedObjs);