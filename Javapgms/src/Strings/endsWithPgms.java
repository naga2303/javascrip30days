package Strings;

public class endsWithPgms
{
    public static void main(String args[]){
        String ar = "Nagarajan";
        System.out.println(ar.endsWith("jn")); //false
        System.out.println(ar.endsWith("jan")); //true
        System.out.println(ar.endsWith("n")); //true
        System.out.println(ar.endsWith("N")); //false
    }
}
