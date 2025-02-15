/**
 * JavaScript Program to Access Elements in an Array
 * Using square bracket notation
Using loop(for or forEach or for…of) Method
Using map() Method
Using find() Method
Using Destructuring Assignment
 */
var ar = [23,65,22,67,12,78]
//Using Map - It returns an array, It takes function as parameter and all the values are accessed.
/*
var res = ar.map(sums)
function sums(t)
{
    return t%2==0
}
console.log(res) // (6) [false, false, true, false, true, true]*/

//find() method - It takes a function and return first and single value which satisfies the condition
//console.log(ar.find(x=>x>65))

//Destructuring
/**
 * Assiging values equal to the index
 */
let [f,,t] = ar;
console.log(f+" "+t)

