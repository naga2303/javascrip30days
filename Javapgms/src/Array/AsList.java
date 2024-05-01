package Array;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class AsList
{
    /*
    It converts the array to a List.
      */
    public static void main(String args[]){

    int[] nums = {23,45,21,456,23};

    List <Integer> lt = new ArrayList<Integer>();
    for(int num:nums){
        lt.add(num);
    }


}
}
