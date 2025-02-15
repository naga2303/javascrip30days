package Strings;

public class equalsIgnoreCasePgms
{
    public static void main(String args[]){
        String s1 = "naga";
        String s2 = "NAGA";
        String s3 = "Naga";
        String s4 = new String("Naga");
        String s5 = new String("NAGA");

        System.out.println(s1.equalsIgnoreCase(s2)); //true
        System.out.println(s1.equalsIgnoreCase(s3)); //true
        System.out.println(s1.equalsIgnoreCase(s4)); //true
        System.out.println(s1.equalsIgnoreCase(s5)); //true
    }
}
