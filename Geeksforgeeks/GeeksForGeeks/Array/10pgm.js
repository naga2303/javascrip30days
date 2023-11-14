//JavaScript Program to Swap First and Last Elements in an Array
var ar = [23,65,27,11]
/**
 * using Temp variable
 
var temp = ar[0];
ar[0]=ar[ar.length-1]
ar[ar.length]= temp;
console.log(ar)
*/

//Using destructuring method
[ar[0], ar[ar.length - 1]] = [ar[ar.length - 1], ar[0]]; 
console.log("Array after swapping : " + ar); 

