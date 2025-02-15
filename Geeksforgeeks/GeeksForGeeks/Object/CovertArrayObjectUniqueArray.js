//How to Convert Array of Objects into Unique Array of Objects in JavaScript ?

//Using Set
let arr = [
    { id: 1, name: "Geek1" },
    { id: 2, name: "Geek2" },
    { id: 1, name: "Geek1" },
    { id: 3, name: "Geek3" },
];

let uniqArr = [...new Set(arr.map(JSON.stringify))].map(JSON.parse);

console.log(uniqArr);

//using filter and indexof() method

let uniqArrFilter = arr.filter((value,index,self)=>
    self.findIndex((obj)=>
    JSON.stringify(obj)===JSON.stringify(value) === index)
);

console.log(uniqArr)