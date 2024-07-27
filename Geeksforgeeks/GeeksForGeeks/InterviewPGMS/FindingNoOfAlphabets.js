let str = "My name is Nagarajan";

const sortedString = str.toLowerCase().split("").sort().join("").trim();
console.log(sortedString)

var num =0;
for(let i=num;i<sortedString.length;i++){
    let count =0;
    for(let j=i;j<sortedString.length;j++){
        if(sortedString[i]!=sortedString[j]){
            num=j;
           console.log("num"+num)
            break;
        }
        else{
            count++;
        }
    }
    console.log(sortedString[i]+":"+count);
    
}
