let car ={
    type:"bmw",
    wheels: "Huge",
    country: "India",
    brakes: function(){
        console.log(`Applying brakes to the ${car.type} in ${car.country}`);
    }
}
//console.log(car.brakes())

/*
using Object.create() method */

const order = {
    isStyding: false,
    printIntroduction : function(){
        console.log( ` my name is ${this.name}, Am I studyig? ${this.isStyding}`)
    }
}
const me = Object.create(order);
me.name = "Naga";
me.isStyding = true;
me.printIntroduction();