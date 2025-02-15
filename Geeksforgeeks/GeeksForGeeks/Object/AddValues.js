const obj = {};

let str = "Naga"
obj["name"] = "Naga";
obj["name"] ="Txt"
obj["a"] = "aa";

obj[str.charAt(1)] = 1;
console.log(obj);
let keys = Object.keys(obj).includes("a")
console.log(obj.name);