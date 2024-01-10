//How to iterate over Set elements in JavaScript ?

const st1 = new Set([1,2,34,5,67])
const etrs = st1.entries()

/*for(let [keys,vals] of etrs)
{
        console.log(keys+':'+vals)
}*/
st1.forEach(element=>{
    console.log(element)
})