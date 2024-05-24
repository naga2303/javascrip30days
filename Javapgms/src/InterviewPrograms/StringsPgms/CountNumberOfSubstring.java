package InterviewPrograms.StringsPgms;

public class CountNumberOfSubstring
{
    public static void main(String args[]){
        String str = "abc";
        int k =2;
        char[] ch = str.toCharArray();
        //System.out.println(ch[0]);
        for(int i=0;i<k;i++){
            System.out.println(ch[i]+""+ch[i+1]);
        }

    }
}
