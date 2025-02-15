function st(){
    function test(){
    for(var i =1;i<=5;i++){
    setTimeout(()=>{
        console.log(i)
    },i*1000)
}

}
test()
console.log("Will execute first before setTimeOut")
}
st()