package APAC.Easy;

public class SentencePalindrome
{
    public static void main(String args[]){
        System.out.println(SentencePalindrome.isSentencePalin("A man, a plan, a canal:Panama"));
        System.out.println(SentencePalindrome.isSentencePalin("race a car"));
    }
    public static boolean isSentencePalin(String word){
        String temp="";
        for(int i=0;i<word.length();i++)
        {
            if(word.charAt(i)==' '|| word.charAt(i)==','|| word.charAt(i)==':'){
                continue;
            }
            else {
                temp = temp.toLowerCase() + word.charAt(i);
            }
        }
        String check="";
        for(int i=temp.length()-1;i>=0;i--){
            check = check+temp.charAt(i);
        }
        System.out.println(temp);
        return temp.equals(check);
    }
}
