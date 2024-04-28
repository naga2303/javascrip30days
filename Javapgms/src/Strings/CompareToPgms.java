package Strings;

public class CompareToPgms
{
    public static void main(String args[]) {
        String s1 = "hello";
        String s2 = "Hello";
        String s3 = "java";
        String s4 = "Java";
        String s5 = "fan";
        String s6 = "";

        System.out.println(s1.compareTo(s2)); //32
        System.out.println(s1.compareTo(s3)); //-2
        System.out.println(s1.compareTo(s4)); //30
        System.out.println(s1.compareTo(s5)); //2
        System.out.println(s1.compareTo(s6)); //5 - It returns the s1 length value.
    }
}
/*
The compare to value returns integer value.
 */