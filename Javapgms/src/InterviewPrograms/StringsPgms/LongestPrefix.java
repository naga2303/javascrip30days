package InterviewPrograms.StringsPgms;

public class LongestPrefix
{
    public static void main(String args[]){
        String str ="aabcdaabce";
        String str1 = str.substring(0,Math.abs(str.length()/2));
        String str2 = str.substring(str.length()/2+1);
        System.out.println(str1);
        System.out.println(str2);
        if(str1.equals(str2)){
            System.out.println(str1.length());
        }


    }
}
