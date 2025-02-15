//How to remove the key-value pairs corresponding to the given keys from an object using JavaScript ?

const rem = {
    name:"Naga",
    dia:"Winter is coming",
    movie:"GOT",
    char:"Snow",
    dino:"Targgerryan"
}

/**
 * 1.Delete
 * 2. Filter
 */
//Using Delete operator
//console.log(delete(rem.dino))
//console.log(Object.keys(rem))

const ar= Object.keys(rem).filter(keys =>keys!='dino')
.reduce((acc,key)=>{acc[key] = rem[key] 
    return acc
},{})
console.log(ar)

