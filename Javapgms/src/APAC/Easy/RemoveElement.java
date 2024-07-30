package APAC.Easy;

import java.util.Arrays;

public class RemoveElement
{
    public static void main(String args[]){
        int[] ar = new int[]{3,2,2,3};
        int[] ar1 = new int[]{0,1,1,2,2,3,0,4,2};
        System.out.println(RemoveElement.orgAr(ar,3));
        //System.out.println(RemoveElement.orgAr(ar1,2));

    }
    public static int orgAr(int []dup,int rem){
        int i=0;
        int n = dup.length;
        while(i<n){
            if(dup[i]==rem){
                dup[i]=dup[n-1];
                System.out.println(dup[i]);
                n--;
            }
            else {
                i++;
            }
        }

        return n;
    }
}
