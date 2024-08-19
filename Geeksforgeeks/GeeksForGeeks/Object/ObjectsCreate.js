/* create objects using constructor */
function vechicle(name,maker,engine){
    this.name = name;
    this.maker = maker;
    this.engine = engine;
}
let car = new vechicle("bmw","germany","2star");
console.log(car);


car["engine"] = "3star";

console.log(car["engine"]);

//Adding property to the car

car["country"] ="India";
console.log(car);