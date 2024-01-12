//How to get dynamic access to an object property in JavaScript ?

const person = {
    name: "A",
    add: "abvd",
    "age":30,
    locations: {
        country: "India",
        City: "Chennai",
        State: "TamilNadu"
    }    
}

console.log(person.locations.State)
console.log(person.age)