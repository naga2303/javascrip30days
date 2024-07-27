var ar =[25,8,7,41]
ar.sort(function (a,b){
    console.log(a+","+b)
    
    return b-a;
})
console.log(ar.includes(25))