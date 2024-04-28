package Strings;

public class SplitPgms
{
    public static void main(String args[])
    {
        String s1 = "Nagarajan";
        String [] words = s1.split("a");
        for(String w:words){
            System.out.println(w);
        }
    }
}
/*
It will convert the string to array with the provided regular expression.
 */
