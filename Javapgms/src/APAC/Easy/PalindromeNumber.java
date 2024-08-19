package APAC.Easy;

public class PalindromeNumber {
    public static void main(String args[]){
        System.out.println(PalindromeNumber.isPalin(121));
        System.out.println(PalindromeNumber.isPalin(-121));
        System.out.println(PalindromeNumber.isPalin(10));
    }
    public static boolean isPalin(int num)
    {
        String temp = String.valueOf(num);
        String rev = "";
        for(int i=temp.length()-1;i>=0;i--){
            rev = rev+temp.charAt(i);
        }
       return temp.equals(rev);
        //return false;
    }
}
