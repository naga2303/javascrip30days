//JavaScript Program to Find Second Largest Element in an Array
//Input: arr[] = {12, 35, 1, 10, 34, 1}

var ar = [12,35,1,10,34,1]

var max = Math.max(...ar)
var newAr= ar.filter((num)=>{
    return num!=max
})
console.log(Math.max(...newAr))