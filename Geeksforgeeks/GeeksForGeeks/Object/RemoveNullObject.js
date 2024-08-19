/**How to Remove Null Objects from Nested Array of objects in JavaScript ?
 * using every, Reduce, includes
 */
let arr = [
    {id:1, values:[1,2,3]},
    {id:2, values:[null,4,5]},
    {id:3, values:[10,11,null]}
]
let output = arr.filter((obj)=>{
    return obj.values.every((value)=>{
        return value!==null;
    })
})
//console.log(output)

//using includes
let outincl= arr.filter((obj)=>{
    return !obj.values.includes(null);
})
//console.log(outincl);

//forEach
function removeNullObjects(arr){
    const result = [];
    arr.forEach(obj => {
        if(obj!=null){
            if(Array.isArray(obj.values)){
                obj.values = obj.values.filter(value => value!==null)
            }
            result.push(obj);
        }
    });
    return result;
}
let outputForEach = removeNullObjects(arr);
console.log(outputForEach);