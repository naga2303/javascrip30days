package APAC.Easy;

import java.util.Arrays;

public class LengthLastWord
{
    public static void main(String args[]){
        System.out.println(LengthLastWord.lastWordLength("Hello World"));
    }
    public static int lastWordLength(String word){
        String ar[] = word.split(" ");

        return ar[ar.length-1].length();
    }
}
