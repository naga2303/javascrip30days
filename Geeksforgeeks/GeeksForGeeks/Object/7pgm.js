//How to create an object with prototype in JavaScript ?

//Using object prototypes

const a = {
    id:23,
    name:"Test"
}

const b = Object.create(a)
console.log(b);