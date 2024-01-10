//How to loop through a plain object with the objects as members in JavaScript ?

const p = {
    a:'a',
    b:'b',
    num:34,
    dbl:23.34
}
/**
 * Methods to iterate
 * Using For…in loop
Using Object.keys()
Using Object.entries()
Using Object.Values()
 */

//For .. in loop
/*for (let i in p){
    console.log(i+":"+p[i])
}*/
//object.keys
/*Object.keys(p).map((key)=>{
    console.log(key+":"+p[key])
})*/

//Object.Values
/*Object.values(p).map(val =>{
    console.log(val)}
    )*/

//Object entries

Object.entries(p).forEach(([k,v])=>{
    console.log(k+":"+v)
    
})



