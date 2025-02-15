//How to Remove Smallest and Largest Elements from an Array in JavaScript ?
let ar = [23,12,5,78,34]
let smallest = ar[0];
for(let i =1;i<ar.length;i++){
    if(ar[i]<smallest){
        smallest= ar[i];
    }
}
let index = ar.indexOf(smallest)
console.log(index)
ar.splice(index,1);
console.log(smallest)
console.log(ar)