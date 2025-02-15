//How to change the value of a global variable inside of a function using JavaScript ?

let globalv=23;
test()
function test ()
{
   //console.log(globalv)
   var globalv=40;
    console.log(globalv)
}
console.log(globalv)
