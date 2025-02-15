//How to negate a predicate function in JavaScript ?
//Negate meaning: negate meaning is to do the opposite. if x>7 is the statement then the negate is !(x>7)
//predicate meaning: it returns true or false based on the input.

//negate a function

function num(t){
    return t!=0
}

console.log(num(2))

//predicate
function aaa(t1){
    return t1%2==0
}
console.log(aaa(4))