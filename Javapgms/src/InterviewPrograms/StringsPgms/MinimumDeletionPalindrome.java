package InterviewPrograms.StringsPgms;

public class MinimumDeletionPalindrome
{
    public static void main(String args[]){
        String s1 = "aebcbda";
        int half = s1.length() / 2;

        char[] ch1 = s1.substring(0,s1.length()/2).toCharArray();
        char[] ch2 = s1.substring(s1.length()/2).toCharArray();
        int counter=0;
            System.out.println(ch1);
        for(int i=0,j=ch2.length-1;i<ch1.length&&j>=0;i++,j--){
            if(ch1[i]!=ch2[j]){
                counter=counter+2;
            }

        }
        System.out.println(counter);


    }
}
