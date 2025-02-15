//What is the purpose of setTimeout() function in JavaScript ?

/**
 * The purpose of setTimeOut function is delay the statements printed in the funciton.
 * Javascript executes in sequential order, when it sees the settimeoutfunction, it wraps the function
 * and keeps it till the time is completed, till then javascript does not stops instead it starts executing
 * the below setps. Once the time is completed, it then send back to the call back functions, and the event
 * loop checks the stack whether it is empty so when the stack is empty, it executes the setTimeout function.
 * Syntax
 * 
 * setTimeOut(function(){
 * Syntax
 * },time)
 */

//console.log('First')
setTimeout(test,10)
function test()
{
    console.log('second')
}
console.log('Still First')

