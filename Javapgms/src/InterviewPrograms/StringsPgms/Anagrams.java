package InterviewPrograms.StringsPgms;

import java.util.Arrays;

public class Anagrams
{
    public static void main(String args[]){
        String s1 = "anagram";
        String s2= "grammar";
        int k=3;


        char [] ar = s1.toCharArray();
        Arrays.sort(ar);
        s1=new String(ar);
        char [] ab = s2.toCharArray();
        Arrays.sort(ab);
        s2 = new String(ab);
        int len = s1.length();
        int counter =0;
        for(int i=0;i<len;i++){

                if(s1.charAt(i)!=s2.charAt(i)){
                    if(k>0){
                    counter++;
                    System.out.println("Index value:"+i+"The character:"+s1.charAt(i));
                    s2=s2.replace(s2.charAt(i),s1.charAt(i));
                    k--;
                }
            }

        }
        System.out.println(s1);
        System.out.println(s2);
        if(s1.equals(s2)){
            System.out.println("It is anagram");
        }
    }
}
