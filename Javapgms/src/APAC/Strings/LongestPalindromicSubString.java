package APAC.Strings;

public class LongestPalindromicSubString
{
    public static void main(String args[]){
        System.out.println(LongestPalindromicSubString.palin("babad"));
        System.out.println(LongestPalindromicSubString.palin("cbbd"));
    }
    public static String palin(String word){

        StringBuilder rev=new StringBuilder();
        String temp="";
        int ans=0;
        int start =0;
        for(int i=0;i<word.length();i++){
            rev = new StringBuilder((word.substring(start, i + 1)));
            rev.reverse();
            if(word.substring(start, i + 1).equals(rev.toString())){
                ans = Math.max(ans,rev.length());
                temp = word.substring(0,i+1);
            }
            else {
              continue;
            }

        }
        System.out.println(ans);
        return temp;
    }
}
