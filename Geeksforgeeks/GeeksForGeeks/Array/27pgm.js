//JavaScript Program to Check if an Array Contains only Unique Values
//const input2 = [7, 8, 1, 5, 5]; 

//Using set
/*
let ar = [7,8,1,5,5]
let st = new Set(ar)
console.log(st.values())
*/

//using indexOf
let ar = [7,8,1,5,5]
for(let i =0;i<ar.length;i++)
{
    if(ar.indexOf(ar[i])!=i)
    return false;
}