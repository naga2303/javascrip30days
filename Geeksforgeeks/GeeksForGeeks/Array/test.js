

function printNum(){
   let ar= [1,2,8,4,5,6,7];
   for(let a of ar){
      console.log(a)
   }
   let at = ar.find((a)=>{
      return a<=8;
   });
   console.log(at)
}

printNum()