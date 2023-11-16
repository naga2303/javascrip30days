//JavaScript Program to find the Nth smallest/largest element from an unsorted Array
/**
 * There are several methods to find the smallest and largest element
 * sorting()
 * set()
 * map()
 */
let ar = [1,3,2,4,8,7,5,6]
//Find second larget element
let setVal = new Set([...ar])

let smallest =3
 
let smallAr = new Set([...ar])
smallAr = [...smallAr].sort((a,b)=>a-b)
for (const index of smallAr.values())
{
    if(smallest ===1)
    {
        console.log(index)
        break;
    }
    smallest = smallest -1;
}
let largest =3
let largeAr = new Set([...ar])
largeAr = [...largeAr].sort((a,b)=>b-a)
for (const index of largeAr)
{
    if(largest===1)
    {
        console.log(index)
    }
    largest = largest-1;
}