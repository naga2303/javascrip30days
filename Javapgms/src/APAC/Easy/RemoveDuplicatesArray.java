package APAC.Easy;

import java.util.*;

public class RemoveDuplicatesArray
{
    public static void main(String args[]){
        int[] ar = new int[]{1,1,2};
        int[] ar1 = new int[]{0,0,1,1,1,2,2,3,3,4};
       System.out.println( RemoveDuplicatesArray.totalLen(ar));
        System.out.println( RemoveDuplicatesArray.totalLen(ar1));
    }
    public static int totalLen(int[] arr){
       Set<Integer> st = new HashSet<>();
       for(int num:arr){
           st.add(num);
       }
        return st.size();
    }
}
