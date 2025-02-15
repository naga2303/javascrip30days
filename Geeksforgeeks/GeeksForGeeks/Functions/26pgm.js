//Timer function

/*
Numbers
* 
const print = ()=>{
    for (var i=0;i<10;i++){
        setTimeout(function(){
            console.log(i)
        },i*2000)
    }
}
print()
*/

//To print date

function printDate()
{
    let dt = new Date();
    console.log(dt)
    let id = setTimeout(printDate,1000)
    clearTimeout(id)
    
}
printDate()
