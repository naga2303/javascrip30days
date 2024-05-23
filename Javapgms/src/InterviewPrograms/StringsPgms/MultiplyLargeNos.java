package InterviewPrograms.StringsPgms;

public class MultiplyLargeNos
{
    public static void main(String args[]){
        String s1 = "4154";
        String s2 = "51454";

        MultiplyLargeNos m = new MultiplyLargeNos();
        String res = m.multiply(s1,s2);
        System.out.println(res);
    }
    public String multiply(String a, String b){
        int aa = Integer.parseInt(a);
        int bb = Integer.parseInt(b);

        long vals = (long) aa *bb;
        return String.valueOf(vals);
    }
}
