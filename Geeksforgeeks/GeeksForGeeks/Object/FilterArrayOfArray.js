let mainArray = [{
    id: 1,
    name: 'Sandip'
},
{
    id: 2,
    name: 'Mandip'
},
{
    id: 3,
    name: 'Praveen'
}
];

let filterArray = [{
    id: 1
},
{
    id: 3
}
];

//using filter
let filterdArray = mainArray.filter(obj=>
    filterArray.map(x => x.id).includes(obj.id)
);
//console.log(filterdArray)

//using looping
let res =[];
for(let item of mainArray){
    for(let filterItem of filterArray){
        if(item.id == filterItem.id){
            res.push(item);
            break;
        }
    }
}
//console.log(res);

//using reduce method
let filterReduce = mainArray.reduce((acc,item)=>{
    if(filterArray.some(filterItem => filterItem.id === item.id)){
        acc.push(item);
    }
    return acc;
},[]);

console.log(filterReduce);