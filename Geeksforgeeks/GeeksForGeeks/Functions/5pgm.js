//What is a typical use case for anonymous functions in JavaScript ?
/**
 * An anonymous function is a kind of function where the name of the function is not provided.
 * Instead only the keyword "function" will be defined but name will not be provided.
 * An anonymous function can be accessible only throught the variable, the function can't be called.
 * An anonymous function cannot be hoisted.
 * 
 */
//Code
let display = function (){
    return 'displayed'
}
console.log(display())