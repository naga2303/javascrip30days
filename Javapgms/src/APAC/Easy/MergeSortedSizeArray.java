package APAC.Easy;

import java.util.Arrays;

public class MergeSortedSizeArray
{
    public static void main(String args[]){
        int[] num1 = {1,2,3,0,0,0};
        int[] num2 = {2,5,6};
        int res[] = MergeSortedSizeArray.mergeSize(num1,num2);
        for(int r:res){
            System.out.println(r);
        }
    }
    public static int[] mergeSize(int[]ar , int[]br){
        int temp=0;
        for(int i=0;i<ar.length;i++){

            if(ar[i]==0){
                ar[i]=br[temp];
                temp++;
            }
        }
        Arrays.sort(ar);

        return ar;
    }
}
