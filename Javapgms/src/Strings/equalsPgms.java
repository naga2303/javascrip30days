package Strings;

import java.io.IOException;

public class equalsPgms
{
    public static void main(String args[]) throws IOException{
        String s1 = "Naga";
        String s2 = "Naga";
        String s3 = "naga";
        String s4 = new String("Naga");
        System.out.println(s1.equals(s2)); //true
        System.out.println(s1.equals(s3)); //false
        System.out.println(s1.equals(s4)); //true
}
}
