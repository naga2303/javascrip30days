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

        for(int i=0;i<word.length();i++){
            String temp = "";

            if(temp.length()==0){
                temp=word.substring(i, i);
            }
            if(!(word.substring(i, i)).contains(temp))
            {
                temp=temp+word.charAt(i);
            }
            else
            {
                continue;
            }
            if(i==word.length()-1)
            {
                sub= temp;
                len = sub.length();
            }

        }

        return len;
    }
}