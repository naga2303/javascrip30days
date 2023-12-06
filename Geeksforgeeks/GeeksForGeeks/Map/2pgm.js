//How to iterate over Map elements in JavaScript ?

/**
 * 1. Use for ... of loop
 * 2. use forEach loop
 */
const mp1 = new Map()
/*mp1.set("Cricket","sport")
mp1.set("Apple","Fruit")

for (let [key,value]of mp1)
{
    console.log(key+"-->"+value)
} */

mp1.forEach((values,key)=>
{
    console.log(values,key)
})