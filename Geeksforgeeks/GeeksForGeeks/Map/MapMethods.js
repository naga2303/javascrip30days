/**
 * 
 * 1) To Create a map, we use new map()
 * const map1 = new Map()
 * console.log(map1) => {};
 * 
 * 2) Insert Item to map
 * const map1 = new Map();
 * map1.set('info',{name:'Jack,'age':'23'})
 * console.log(map1) // // Map {"info" => {name: "Jack", age: 26}} , it means in a key we can assign the value as object
 * 
 * You can also use object has a key.
 * const map1 = new Map();
 * let obj ={}
 * map1.set({},{name:;a})
 * console.log(map1) // {{} =>{name:'a'}}
 * 
 * 3. check map elements
 * let map1 = new Map()
 * map1.set('info',{name:'Jack,'age':'23'})
 * console.log(map1.has('info')) //return => true
 * 
 * 4.Removing elements
 * You can use the clear() method and delete() method to remove the elements.
 * delete method returns true if the key is present.
 * let map1() = new Map();
 *  map1.set('info',{name:'Jack,'age':'23'})
 * map1.delete('address') // returns false
 * map1.delete('info') 
 * console.log(map1) // return {}
 * 
 * 5. To remove all the elemnts in the map
 * map1.clear();
 * 
 * 6. To know the map size
 * map1.size()
 * 
 * 7. Iterate through the map
 * const m = new Map();
 * m.set('a',1)
 * m.set('b',2)
 * for (const [key,value] of m)
 * {
 * console.log(key+'-'+value)
 * }
 * 
 * 8.Iterate of keys
 * for(let keys of map1.keys())
 * {
 * console.log(keys)
 * }
 * 9.Iterate of values
 * for(let vals of map1.values())
 * {
 * console.log(vals)
 * }
 * 
 * 10. To get key and values
 * for(let ele of map1.entries())
 * {
 * console.log(`${elem[0]}: ${elem[1]}`)
 * }
 * 
 * 11.
 */