package APAC.Easy;

import java.util.Arrays;

public class SumOflastNumArray
{
    public static void main(String args[]) throws NumberFormatException
    {
        int[] ar = new int[]{1,2,3};
        int[] ar1 = {4,3,2,1};
        int[] reslt = SumOflastNumArray.lastNumArray(ar);
        int[] reslt1 = SumOflastNumArray.lastNumArray(ar1);

        for(int num:reslt){
            System.out.println(num);

    }
        for(int num:reslt1){
            System.out.println(num);
        }

       // System.out.println(SumOflastNumArray.lastNumArray(ar1));

    }
    public static int[] lastNumArray(int[] sub){
        StringBuilder sb = new StringBuilder();

        for(int s:sub){
            sb.append(s);
        }
        int a = Integer.parseInt(sb.toString());
        a = a+1;
        String s = String.valueOf(a);
       /* int[] res = new int[]{Integer.parseInt(Arrays.toString(s.split("")))};
        for(int r:res){
            System.out.println(r);
        }*/
        int[] ar = new int[sub.length];
        for(int i=0;i<s.length();i++){
            ar[i]= Integer.parseInt(String.valueOf(s.charAt(i)));
        }


        return ar;
    }
}
