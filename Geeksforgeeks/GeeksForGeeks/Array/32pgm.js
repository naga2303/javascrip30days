//JavaScript Program to Find the Most Frequent Element in an Array

//Methods to Find the most frequent element in an array in JavaScript
//Using JavaScript Loop - sort

let arr = [ 
    1, 1, 3, 5, 7, 6, 8, 5, 6, 4, 
    7, 6, 0, 2, 1, 6, 8, 9, 5, 
]; 

arr.sort((a,b)=>a-b)
let count =1;
let max =0;
let el;
for (let i=1;i<arr.length;i++){
    if(arr[i]==arr[i-1]){
        count++;
    }
    else
    {
        count =1;
    }
    if(count > max)
    {
        max=count;
        el = arr[i]
    }
}
console.log(el) 

//using Map

/*let m = new Map();
for (const i in arr)
{
  if(!m.get(arr[i]))m.set(arr[i],1)
  else
    m.set(arr[i],1)
}
console.log(m.values())*/