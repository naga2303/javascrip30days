//JavaScript Program to Check an Array is Sorted or Not

let ar = [2,6,36]

for (let i=0,j=i+1;i<length-1,j<length;i++,j++)
{
    if(ar[j]-ar[i]==1)
    {
        console.log('sorted')
        break;
    }
    else
    {
        console.log('Not sorted')
    }
}