package APAC.Strings;
public class LongSubWithoutRepeating
{
    public static void main(String args[]){
        String s1 = "abcabcbb";
        String s2 = "bbbb";
        String s3 = "pwwkew";
        LongSubWithoutRepeating.longRepeating(s1);
        LongSubWithoutRepeating.longRepeating(s2);
        LongSubWithoutRepeating.longRepeating(s3);
    }
    public static int longRepeating(String word)
    {
        String sub = "";
        int len=0;

        for(int i=0;i<s1.length;i++){
            String temp="";
            if(!s1.charAt(i).contains(temp))
            {
                temp=temp+s1.charAt(i);
            }
            else
            {
                continue;
            }
            if(i==s1.length-1)
            {
                sub= temp;
                len = sub.length();
            }

        }

        return len;
    }
}