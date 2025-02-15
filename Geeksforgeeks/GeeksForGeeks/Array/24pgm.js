//JavaScript Program to Find the Largest Three Elements in an Array

const inputArray = [12, 56, 7, 89, 43, 21]; 

inputArray.sort((a,b)=>b-a)
console.log(inputArray.slice(0,3))
