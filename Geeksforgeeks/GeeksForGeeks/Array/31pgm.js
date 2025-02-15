//JavaScript Program to Find the Missing Number in a Given Integer Array of 1 to 100

let ar =[1,2,3,4,5,6,7,9,10]
for (let i=1,j=0;i<=10,j<ar.length;i++,j++)
{
   //console.log(ar[j]+" "+i)
   if(ar[j]!=i)
   {
    console.log ("missing num: "+i)
    break;
   }
    
}