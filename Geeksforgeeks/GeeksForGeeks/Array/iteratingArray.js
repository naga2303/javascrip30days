//Ways of iterating over a array in JavaScript
/*
1. For - loop
while loop
forEach
every()
reduce()
some()
*/

var ar= new Array ([23,'Nagarajan',1991,2023,45,2,'stringgg'])
//for loop
/*for (let i=0;i<ar.length;i++)
{
    console.log(ar[i]+'type:'+typeof (ar[i]));
} //working
*/

//while loop
/*let j=0;
while(j<ar.length)
{
console.log(ar[j])
j++;
}*/

//forEach
/*let test=[]
let index=0;
ar.forEach(function (num,index)
{
    //console.log(num)
    test.push(...num)
    index++;
});
console.log(test)
*/

//Every() - It returns boolean value. If the condition satisfies for all the element then it returns true
// else false.
let res=ar.every(isNumber)
function isNumber(test)
{
    return test;
}
console.log(res)