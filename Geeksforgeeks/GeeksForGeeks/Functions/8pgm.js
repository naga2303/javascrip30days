//How to declare the optional function parameters in JavaScript ?

//Using OR Operator
check (10)

function check(a,b)
{
    b=b||1
    console.log(a,b)
}

//using assignment Operator

check1(10)
function check1(a,b=5){
    console.log(a,b)
}
