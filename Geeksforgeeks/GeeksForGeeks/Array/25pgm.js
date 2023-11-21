//JavaScript Program to Find Next Smaller Element
 
//Input: inputArray=[ 11, 13, 21, 3 ]
 let ar = [11,7,13,21,3]
 let outAr=[]
 ar.forEach((ele,index)=>{
    let smele=ar.slice(index+1).find((e)=> e<ele)
    outAr.push(smele || -1)
 })
 console.log(...outAr)
