package Array;

import java.util.Arrays;

public class CopyOfPgms
{
    public static void main(String args[])
    {
        int[] numbers = {23,45,12,567,23,45};
        int[] copy = Arrays.copyOf(numbers,4);
        for(int num:copy){
            System.out.println(num);
        }
    }
}
/*
It copies the values from one array and the return type is array of values.
It does not affect the original array
 */