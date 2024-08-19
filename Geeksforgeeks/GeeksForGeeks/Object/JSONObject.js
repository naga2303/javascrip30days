let myOrder = {
    "name_of_product" : "EarBuds",
    "cost":"899",
    "warranty" :"1_year"
};

for(let a in myOrder){
  //  console.log(a + ":"+ myOrder[a]);
   // console.log(myOrder[a])
}

/**
 * Converting a JSON Text to a Javascript object
 */
const jsonString = '{"name": "John", "age": 30}';

const jsonObject = JSON.parse(jsonString);

//console.log(jsonObject.name);

/**Looping through json */

for (let key in jsonObject){
    console.log(key+" : "+jsonObject[key]);
}