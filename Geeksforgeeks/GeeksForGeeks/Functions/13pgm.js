//What is the difference between call and apply in JavaScript ?

/**
 * The only difference between call and apply is call takes the arguments separated by comma while apply take arguments as array.
 */

//Call

const person ={
    fname: 'naga',
    lname: 'rajan'
}

function greet(test,t1){
    console.log(`${test},${t1},${this.fname} ${this.lname}`)
}

//greet.call(person,'Hello')
greet.apply(person,['hello', 'bro'])