//How to remove the key-value pairs corresponding to the given keys from an object using JavaScript ?

//Using delete operator
/**
 * syntax
 * delete(objectName.keyName)
 * delete(objectName[keyName])
 */
//pgm
var obj={
    name:'Nagarajan',
    add:'17b',
    company:'volante',
    desgination:'tl'
}
console.log("after removal")
delete(obj.desgination)
//delete(obj[add,company])
console.log(obj)