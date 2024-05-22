package InterviewPrograms.StringsPgms;

public class SumTwoLarge
{
    public static void main(String args[]){
        String a = "3333311111111111";
        String b = "44422222221111";
        //System.out.println(Integer.parseInt(a));
        String res = sumDigits(a.substring(1,a.length()-1),b.substring(1,b.length()-1));
        System.out.println(res);
    }
    public static String sumDigits(String s1, String s2){
        long a = Long.parseLong(s1);
        long b = Long.parseLong(s2);
        long c = a+b;
        return String.valueOf(c);
    }
}
