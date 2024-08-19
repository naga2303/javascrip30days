let nameText = "My name is Nagarajan"

let obj = {};
//let keys = Object.keys(obj)

for (let i =0;i<nameText.length;i++)
{
    if(Object.keys(obj).includes(nameText.charAt(i)))
    {
        let sum =0;
        sum = obj[nameText.charAt(i)];
        sum++;
        obj[nameText.charAt(i)] = sum;
    }
    else
    {
        obj[nameText.charAt(i)] = 1
    }

}
/*Object.entries(([k,v])=>{
    console.log(k+" : "+v);
})*/

console.log(obj);