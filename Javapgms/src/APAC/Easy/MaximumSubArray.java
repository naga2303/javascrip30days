package APAC.Easy;

public class MaximumSubArray
{
    public static void main(String args[]){
        int ar[] = new int[]{-2,1,-3,4,-1,2,1,-5,4};
        System.out.println(MaximumSubArray.returnMax(ar));
    }
    public static int returnMax(int[] sumArr){

        int max =0;
        for(int i=0;i<sumArr.length;i++){
            int temp=0;
            for(int j=i+1;j< sumArr.length;j++){
                temp=temp+sumArr[j];
                if(temp>max){
                    max = temp;
                }
                else
                {
                    continue;
                }
            }

        }

        return max;
    }
}
