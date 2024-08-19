package APAC.Easy;

import java.util.Arrays;

public class ValidAnagramStrings
{
    public static void main(String[] args){
        String a="anagram";
        String b= "nagaram";
        System.out.println(ValidAnagramStrings.isAnagram(a,b));
    }
    public static boolean isAnagram(String s, String t){

        if(s.length()!=t.length()){
            return false;
        }
        String[] ar = s.split("");
        Arrays.sort(ar);
        String[] ab = t.split("");
        Arrays.sort(ab);

        for(int i =0,j=0;i<ar.length && j<ab.length;i++,j++){
            if(ar[i]!=ar[j]){
                return false;
            }
        }

        return true;
    }
}
