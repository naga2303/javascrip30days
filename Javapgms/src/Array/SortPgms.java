package Array;

import java.lang.reflect.Array;
import java.util.Arrays;

public class SortPgms
{
    public void sortInteger(int[] ar){
        Arrays.sort(ar);
        for(int num:ar){
            System.out.println(num);
        }
    }
    public void sortString(String[] str){
        Arrays.sort(str);
        for(String name:str){
            System.out.println(name);
        }
    }
    public static void main (String args[])
    {
        SortPgms spg = new SortPgms();
        int[] atr = {23,1,34,556,6,22,669,355};
        spg.sortInteger(atr);
        String[] stt = {"z","s","t","a"};
        spg.sortString(stt);
    }
}
